import * as React from "react";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import Page, { SideLink, SideItem } from "components/shared/common/Page";
import Title from "components/shared/kit/Title";

export default ({ projectId, name, children }) =>
  <Page
    sidebar={
      <SideItem>
        <Title>
          {name}
        </Title>
        <SideLink to={replaceParams(paths.PROJECT_TICKETS, { projectId })}>
          Tickets
        </SideLink>
      </SideItem>
    }
  >
    {children}
  </Page>;
