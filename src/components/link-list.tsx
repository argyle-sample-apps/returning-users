import type { ReactElement } from "react";
import React from "react";
import Link from "next/link";
import { Splitter } from "components/splitter";
import { Paragraph } from "components/typography";
import { ChevronRight } from "components/icons";

type ListItemProps = {
  icon: ReactElement;
  url: string;
  label: string;
};

export const LinkList = ({ list }: { list: ListItemProps[] }) => {
  return (
    <div>
      <Splitter />
      <ul>
        {list.map((flow) => (
          <React.Fragment key={flow.url}>
            <li>
              <Link href={flow.url}>
                <a className="flex justify-between py-4 transition-all">
                  <div className="flex">
                    {flow.icon}
                    <Paragraph large className="ml-4">
                      {flow.label}
                    </Paragraph>
                  </div>
                  <ChevronRight />
                </a>
              </Link>
            </li>
            <Splitter />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
