import { ReactElement } from "react";
import clsx from "clsx";
import { Button } from "components/button";
import { Heading, Paragraph } from "components/typography";
import { Splitter } from "components/splitter";
import { ArgyleLink } from "components/argyle-link";
import Fullscreen from "layouts/fullscreen";
import { PrivateIcon, LockIcon } from "components/icons";
import { useLink } from "hooks/use-link";

export default function ConnectPage() {
  const {
    openLink,
    isLinkLoading,
    isLinkOpen,
    setLinkInstance,
    setIsLinkOpen,
  } = useLink();

  return (
    <>
      <ArgyleLink
        customConfig={{
          onClose: () => {
            setIsLinkOpen(false);
          },
        }}
        onLinkInit={(link) => {
          setLinkInstance(link);
        }}
      />
      {!isLinkOpen && (
        <div className="flex h-full flex-col">
          <div className="mt-auto px-4 pr-[16px] pt-5">
            <Heading className="mb-3 mt-5">Connect accounts</Heading>
            <Paragraph large className="mb-5 text-gray-T50">
              Use this screen to connect sample accounts to Argyle.
            </Paragraph>
            <Paragraph large className="mb-5 text-gray-T50">
              After finishing the flow, necessary keys will be printed to the
              brower&apos;s console.
            </Paragraph>
            <div
              className={clsx("flex pb-5", isLinkLoading && "animate-pulse")}
            >
              <Button onClick={openLink}>Connect an account</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ConnectPage.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
