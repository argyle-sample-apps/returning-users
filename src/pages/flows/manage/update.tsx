import { ReactElement, useEffect } from "react";
import Fullscreen from "layouts/fullscreen";
import { useUserToken } from "hooks/use-user-token";
import { useLink } from "hooks/use-link";
import { setCookie } from "cookies-next";
import { ArgyleLink } from "components/argyle-link";
import { pdConfig } from "consts";
import { useRouter } from "next/router";
import { config } from "config";

const { userId, accountId, linkItemId } = config.dds;

export default function UpdateDds() {
  const router = useRouter();
  const { mutate: getUserToken, data: userToken } = useUserToken();

  const { openLink, setLinkInstance, setIsLinkOpen } = useLink();

  const onClose = () => {
    setIsLinkOpen(false);
    router.replace("/flows/manage");
  };

  useEffect(() => {
    setCookie("argyle-x-user-id", userId, { maxAge: 60 * 60 * 24 });
    setCookie("argyle-x-account-id", accountId, { maxAge: 60 * 60 * 24 });

    getUserToken();

    openLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userToken && (
        <ArgyleLink
          onLinkInit={setLinkInstance}
          customConfig={{
            userToken: userToken.access,
            linkItems: [linkItemId],
            payDistributionUpdateFlow: true,
            payDistributionConfig: pdConfig,
            onClose: onClose,
          }}
        />
      )}
    </>
  );
}

UpdateDds.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
