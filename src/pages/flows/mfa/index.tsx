import { ReactElement, useEffect, useState } from "react";
import Fullscreen from "layouts/fullscreen";
import { Heading, Paragraph } from "components/typography";
import { Button } from "components/button";
import { useUserToken } from "hooks/use-user-token";
import { useLink } from "hooks/use-link";
import { setCookie } from "cookies-next";
import { ArgyleLink } from "components/argyle-link";
import { useTriggerScan } from "hooks/use-trigger-scan";
import { KeyIcon } from "components/icons";
import { config } from "config";

const { userId, accountId, linkItemId } = config.mfa;

export default function Mfa() {
  const [isScanning, setIsScanning] = useState(false);

  const { mutate: triggerScan, data: scanFinished } = useTriggerScan();
  const { mutate: getUserToken, data: userToken } = useUserToken();

  const { openLink, setLinkInstance, setIsLinkOpen } = useLink();

  const onClose = () => {
    setIsLinkOpen(false);
  };

  useEffect(() => {
    setCookie("argyle-x-user-id", userId, { maxAge: 60 * 60 * 24 });
    setCookie("argyle-x-account-id", accountId, { maxAge: 60 * 60 * 24 });

    getUserToken();

    triggerScan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenLink = () => {
    if (!scanFinished) {
      return setIsScanning(true);
    }

    openLink();
  };

  useEffect(() => {
    if (scanFinished && isScanning === true) {
      setIsScanning(false);

      openLink();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScanning, scanFinished]);

  return (
    <>
      {userToken && (
        <ArgyleLink
          onLinkInit={setLinkInstance}
          customConfig={{
            userToken: userToken.access,
            linkItems: [linkItemId],
            onClose: onClose,
          }}
        />
      )}
      <div className="flex h-full flex-col pb-5">
        <div className="mt-auto px-5">
          <KeyIcon large />
          <Heading className="my-4">Direct users to complete MFA</Heading>
          <Paragraph className="mb-[40px] text-gray-T50">
            An additional multi-factor authentication (MFA) step can be required
            when users are confirming their pay allocation or removing
            allocations. In such cases, you can send the user directly to the
            MFA screen. <br />
            <br />
            Use code <span className="text-black">8081</span> to complete the
            MFA step.
          </Paragraph>

          <div className={isScanning ? "animate-pulse" : ""}>
            <Button onClick={handleOpenLink}>Run demo</Button>
          </div>
        </div>
      </div>
    </>
  );
}

Mfa.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen back>{page}</Fullscreen>;
};
