import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import { NavLink } from "react-router-dom";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Line from "components/shared/kit/Line";
import Title from "components/shared/kit/Title";
import More from "./More";

const Wrap = styled(Line)`
  display: flex;
  align-items: center;
`;

const BackToProject = styled(nest(NavLink, Title))`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
` as any;

export default ({ projectId }) =>
  <Wrap>
    <BackToProject to={replaceParams(paths.PROJECT, { projectId })}>
      Back to project
    </BackToProject>
    <More />
  </Wrap>;
