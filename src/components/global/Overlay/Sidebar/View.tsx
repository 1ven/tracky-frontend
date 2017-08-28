import * as React from "react";
import styled from "styled-components";
import List from "./List";
import Projects from "./Projects";
import { border } from "core/colors";

export default ({ projects }) =>
  <Wrap>
    <List>
      <Projects items={projects} />
    </List>
  </Wrap>;

const Wrap = styled.div`
  height: 100%;
  width: 250px;
  border-right: 1px solid ${border};
`;
