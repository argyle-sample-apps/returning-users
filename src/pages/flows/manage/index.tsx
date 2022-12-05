import React from "react";
import type { ReactElement } from "react";
import Fullscreen from "layouts/fullscreen";
import { Heading, Paragraph } from "components/typography";
import { CloseIcon, AddIcon, ConfirmIcon, ManageIcon } from "components/icons";
import { LinkList } from "components/link-list";

const flows = [
  {
    icon: <CloseIcon />,
    url: "/flows/manage/revoke",
    label: "Revoke access",
  },
  {
    icon: <AddIcon />,
    url: "/flows/manage/connect",
    label: "Connect more accounts",
  },
  {
    icon: <ConfirmIcon />,
    url: "/flows/manage/update",
    label: "Update direct deposit",
  },
];

export default function Manage() {
  return (
    <div className="flex h-full flex-col pb-12">
      <div className="mt-auto px-5">
        <ManageIcon large />
        <Heading className="my-4">
          Direct users to manage their connected accounts
        </Heading>
        <Paragraph className="mb-[40px] text-gray-T50">
          You can direct users to manage their account connections, where they
          can revoke the access, connect more accounts (for example, when a user
          has more than one job), and update their pay distribution.
        </Paragraph>
        <LinkList list={flows} />
      </div>
    </div>
  );
}

Manage.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen back>{page}</Fullscreen>;
};
