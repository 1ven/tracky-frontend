import * as React from "react";
import styled from "styled-components";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import Page, { SideLink, SideItem } from "components/shared/kit/Page";
import Headline from "components/shared/kit/Headline";

export default ({ match, children, projectName }) =>
  <Page
    title={projectName}
    sidebar={
      <SideItem>
        <Headline>Menu</Headline>
        <SideLink to={replaceParams(paths.PROJECT_TICKETS, match.params)}>
          Tickets
        </SideLink>
      </SideItem>
    }
  >
    {children}
  </Page>;
