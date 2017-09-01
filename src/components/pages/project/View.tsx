import * as React from "react";
import styled from "styled-components";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import Page, { LeftLink, LeftItem } from "components/shared/kit/Page";
import Headline from "components/shared/kit/Headline";

export default ({ match, children, projectName }) =>
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
  >
    {children}
  </Page>;
