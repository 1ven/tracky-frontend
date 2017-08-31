import * as React from "react";
import { paths } from "core/router";
import Page, { SideLink, SideItem } from "components/shared/kit/Page";
import Headline from "components/shared/kit/Headline";

export default ({ children }) =>
  <Page
    title="Me"
    sidebar={
      <SideItem>
        <Headline>Menu</Headline>
        <SideLink to={paths.ME_TICKETS}>Tickets</SideLink>
      </SideItem>
    }
  >
    {children}
  </Page>;
