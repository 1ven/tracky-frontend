import * as React from "react";
import { paths } from "core/router";
import Page, { SideLink, SideItem } from "components/shared/common/Page";
import Title from "components/shared/kit/Title";

export default ({ children }) =>
  <Page
    sidebar={
      <SideItem>
        <Title>My page</Title>
        <SideLink to={paths.ME_TICKETS}>Tickets</SideLink>
      </SideItem>
    }
  >
    {children}
  </Page>;
