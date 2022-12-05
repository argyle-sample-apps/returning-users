declare global {
  interface Window {
    Argyle: any;
  }
}

import { useEffect, useState } from "react";
import {
  CredentialsHints,
  SamplePasswordButton,
} from "views/credentials-hints";
import { useAtomValue } from "jotai";
import { linkScriptLoadedAtom } from "stores/global";
import { ArgyleLinkProps } from "models/link-config";

type BaseConfig = Pick<
  ArgyleLinkProps,
  "customizationId" | "linkKey" | "apiHost" | "onUIEvent"
>;

type ArgyleLinkCustomConfig = Omit<ArgyleLinkProps, keyof BaseConfig>;

type ArgyleLinkComponentProps = {
  customConfig: ArgyleLinkCustomConfig;
  onLinkInit: (link: any) => void;
};

export function ArgyleLink({
  customConfig,
  onLinkInit,
}: ArgyleLinkComponentProps) {
  const isLinkScriptLoaded = useAtomValue(linkScriptLoadedAtom);

  const [showHints, setShowHints] = useState(false);
  const [showHintsButton, setShowHintsButton] = useState(false);

  const handleUIEvent = (event: any) => {
    switch (event.name) {
      case "search - opened":
      case "success - opened":
      case "pd success - opened":
        setShowHintsButton(false);
        break;

      case "login - opened":
      case "mfa - opened":
        setShowHintsButton(true);
        break;

      case "link closed":
        setShowHintsButton(false);
        setShowHints(false);
        break;

      default:
        break;
    }
  };

  const baseConfig: BaseConfig = {
    customizationId: process.env.NEXT_PUBLIC_ARGYLE_CUSTOMIZATION_ID,
    linkKey: process.env.NEXT_PUBLIC_ARGYLE_LINK_KEY,
    apiHost: process.env.NEXT_PUBLIC_ARGYLE_BASE_URL,
    onUIEvent: handleUIEvent,
  };

  const callbacksConfig = {
    onAccountCreated: ({ userId, accountId, linkItemId }) => {
      console.log("userId: ", userId);
      console.log("accountId: ", accountId);
      console.log("linkItemId: ", linkItemId);
    },
  };

  useEffect(() => {
    if (isLinkScriptLoaded) {
      const link = window.Argyle.create({
        ...baseConfig,
        ...callbacksConfig,
        ...customConfig,
      });

      onLinkInit(link);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLinkScriptLoaded]);

  return (
    <>
      <CredentialsHints showHints={showHints} setShowHints={setShowHints} />
      <SamplePasswordButton
        showHintsButton={showHintsButton}
        showHints={showHints}
        onClick={() => setShowHints(!showHints)}
      />
    </>
  );
}
