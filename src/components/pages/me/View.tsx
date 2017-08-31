import * as React from "react";
import { paths } from "core/router";
import Page, { SideLink, SideItem } from "components/shared/common/Page";
import Headline from "components/shared/kit/Headline";

export default ({ children }) =>
  <Page
    sidebar={
      <SideItem>
        <Headline>Menu</Headline>
        <SideLink to={paths.ME_TICKETS}>Tickets</SideLink>
      </SideItem>
    }
  >
    {children}
  </Page>;
