import { ReactElement, useEffect } from "react";
import Fullscreen from "layouts/fullscreen";
import { useLink } from "hooks/use-link";
import { ArgyleLink } from "components/argyle-link";
import { useRouter } from "next/router";

export default function ConnectMore() {
  const router = useRouter();
  const { openLink, setLinkInstance, setIsLinkOpen } = useLink();

  useEffect(() => {
    openLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClose = () => {
    setIsLinkOpen(false);
    router.replace("/flows/manage");
  };

  return (
    <>
      <ArgyleLink
        onLinkInit={setLinkInstance}
        customConfig={{
          onClose: onClose,
        }}
      />
    </>
  );
}

ConnectMore.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
