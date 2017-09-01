import * as React from "react";
import styled from "styled-components";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import Page, { LeftLink, LeftItem } from "components/shared/kit/Page";
import Headline from "components/shared/kit/Headline";

export default ({ match, children, projectName, rightBar }: Props) =>
  <Page
    title={projectName}
    leftBar={
      <LeftItem>
        <Headline>Menu</Headline>
        <LeftLink to={replaceParams(paths.PROJECT_TICKETS, match.params)}>
          Tickets
        </LeftLink>
      </LeftItem>
    }
    rightBar={rightBar}
  >
    {children}
  </Page>;

export type Props = {
  match: any;
  children: React.ReactNode;
  projectName: string;
  rightBar?: React.ReactNode;
};
