import { ReactElement, useEffect, useState } from "react";
import Fullscreen from "layouts/fullscreen";
import { Heading, Paragraph } from "components/typography";
import { Button } from "components/button";
import { useLink } from "hooks/use-link";
import { ArgyleLink } from "components/argyle-link";
import { setCookie } from "cookies-next";
import { useTriggerScan } from "hooks/use-trigger-scan";
import { useUserToken } from "hooks/use-user-token";
import { RestartIcon } from "components/icons";
import { config } from "config";

const { userId, accountId, linkItemId } = config.reconnect;

export default function Reconnect() {
  const [isScanning, setIsScanning] = useState(false);

  const { mutate: triggerScan, data: scanFinished } = useTriggerScan();
  const { mutate: getUserToken, data: userToken } = useUserToken();

  const { openLink, setLinkInstance, setIsLinkOpen } = useLink();

  const onClose = () => {
    setIsLinkOpen(false);
  };

  useEffect(() => {
    setCookie("argyle-x-user-id", userId, { maxAge: 60 * 60 * 24 });
    setCookie("argyle-x-account-id", accountId, {
      maxAge: 60 * 60 * 24,
    });

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
          <RestartIcon large />
          <Heading className="my-4">Direct users to reconnect accounts</Heading>
          <Paragraph className="mb-[40px] text-gray-T50">
            Some payroll providers have connection timeouts or force log outs if
            users log in from another device.
            <br />
            <br />
            If your customers have previously connected a payroll account, Link
            enables them to re-authenticate without entering their credentials
            again.
          </Paragraph>

          <div className={isScanning ? "animate-pulse" : ""}>
            <Button onClick={handleOpenLink}>Run demo</Button>
          </div>
        </div>
      </div>
    </>
  );
}

Reconnect.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen back>{page}</Fullscreen>;
};
