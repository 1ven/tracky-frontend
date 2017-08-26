import * as React from "react";
import styled from "styled-components";
import List from "./List";
import Projects from "./Projects";

export default ({ projects }) =>
  <Wrap>
    <List>
      <Projects items={projects} />
    </List>
  </Wrap>;

const Wrap = styled.div`
  height: 100%;
  width: 250px;
  background-color: #fff;
`;
