import { ReactElement, useEffect, useState } from "react";
import Fullscreen from "layouts/fullscreen";
import { useLink } from "hooks/use-link";
import { ArgyleLink } from "components/argyle-link";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useUserToken } from "hooks/use-user-token";
import { useRandomAccount } from "hooks/use-random-account";

export default function Revoke() {
  const [linkItem, setLinkItem] = useState(null);
  const { data: account } = useRandomAccount();
  const { mutate: getUserToken, data: userToken } = useUserToken();

  const { openLink, setLinkInstance, setIsLinkOpen } = useLink();

  const router = useRouter();

  useEffect(() => {
    if (!account) return;

    const userId = account.user;
    const accountId = account.id;
    const linkItemId = account.link_item;

    setCookie("argyle-x-user-id", userId, { maxAge: 60 * 60 * 24 });
    setCookie("argyle-x-account-id", accountId, { maxAge: 60 * 60 * 24 });
    setLinkItem(linkItemId);

    getUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  useEffect(() => {
    if (!userToken) return;

    openLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  const onClose = () => {
    setIsLinkOpen(false);
    router.replace("/flows/manage");
  };

  return (
    <>
      {userToken && (
        <ArgyleLink
          onLinkInit={setLinkInstance}
          customConfig={{
            userToken: userToken.access,
            linkItems: [linkItem],
            onClose: onClose,
          }}
        />
      )}
    </>
  );
}

Revoke.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
