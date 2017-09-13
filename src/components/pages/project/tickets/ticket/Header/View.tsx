import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import { NavLink } from "react-router-dom";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Headline from "components/shared/kit/Headline";
import More from "./More";

export default ({ projectId }) =>
  <Headline right={<More />}>
    <NavLink to={replaceParams(paths.PROJECT_TICKETS, { projectId })}>
      Back to project
    </NavLink>
  </Headline>;
