import React from "react";
import type { ReactElement } from "react";
import Fullscreen from "layouts/fullscreen";
import { Heading, Paragraph } from "components/typography";
import {
  RestartIcon,
  ConfirmIcon,
  ManageIcon,
  KeyIcon,
} from "components/icons";
import { LinkList } from "components/link-list";

const flows = [
  {
    icon: <RestartIcon />,
    url: "/flows/reconnect",
    label: "Reconnect accounts",
  },
  {
    icon: <ConfirmIcon />,
    url: "/flows/dds",
    label: "Confirm a direct deposit switch",
  },
  {
    icon: <ManageIcon />,
    url: "/flows/manage",
    label: "Manage connected accounts",
  },
  { icon: <KeyIcon />, url: "/flows/mfa", label: "Complete MFA" },
];

export default function Home() {
  return (
    <div className="h-full pb-6">
      <div className="flex h-full flex-col px-5">
        <Heading className="mb-4 mt-[40px]">Returning users demo</Heading>
        <Paragraph className="mb-[40px] text-gray-T50">
          Learn how to preserve sessions for Link users and avoid duplicate
          account connections with user tokens.
        </Paragraph>

        <LinkList list={flows} />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
