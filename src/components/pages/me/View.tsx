import * as React from "react";
import { paths } from "core/router";
import Page, { LeftLink, LeftItem } from "components/shared/kit/Page";
import Headline from "components/shared/kit/Headline";

export default ({ children }) =>
  <Page
    title="Me"
    leftBar={
      <LeftItem>
        <Headline>Menu</Headline>
        <LeftLink to={paths.ME_TICKETS}>Tickets</LeftLink>
      </LeftItem>
    }
  >
    {children}
  </Page>;
