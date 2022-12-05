import { ReactElement, useEffect } from "react";
import Fullscreen from "layouts/fullscreen";
import { Heading, Paragraph } from "components/typography";
import { Button } from "components/button";
import { useUserToken } from "hooks/use-user-token";
import { useLink } from "hooks/use-link";
import { setCookie } from "cookies-next";
import { ArgyleLink } from "components/argyle-link";
import { pdConfig } from "consts";
import { ConfirmIcon } from "components/icons";
import { config } from "config";

const { userId, accountId, linkItemId } = config.dds;

export default function Dds() {
  const { mutate: getUserToken, data: userToken } = useUserToken();

  const { openLink, setLinkInstance, setIsLinkOpen } = useLink();

  const onClose = () => {
    setIsLinkOpen(false);
  };

  useEffect(() => {
    setCookie("argyle-x-user-id", userId, { maxAge: 60 * 60 * 24 });
    setCookie("argyle-x-account-id", accountId, { maxAge: 60 * 60 * 24 });

    getUserToken();
  }, [getUserToken]);

  return (
    <>
      {userToken && (
        <ArgyleLink
          onLinkInit={setLinkInstance}
          customConfig={{
            userToken: userToken.access,
            linkItems: [linkItemId],
            payDistributionAutoTrigger: true,
            payDistributionUpdateFlow: true,
            payDistributionConfig: pdConfig,
            onClose: onClose,
          }}
        />
      )}
      <div className="flex h-full flex-col pb-5">
        <div className="mt-auto px-5">
          <ConfirmIcon large />
          <Heading className="my-4">
            Direct users to confirm a direct deposit switch
          </Heading>
          <Paragraph className="mb-[40px] text-gray-T50">
            You can have users
            <ul className="my-3 mx-4 list-disc">
              <li>connect their payroll accounts</li>
              <li>return to your app for additional steps</li>
              <li>return to Argyle to confirm a pay distribution update</li>
            </ul>
            This use case is relevant if you are utilizing Argyle for
            paycheck-linked lending or similar solutions.
          </Paragraph>
          <Button onClick={openLink}>Run demo</Button>
        </div>
      </div>
    </>
  );
}

Dds.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen back>{page}</Fullscreen>;
};
