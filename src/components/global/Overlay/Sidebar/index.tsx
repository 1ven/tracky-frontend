import * as React from "react";
import styled from "styled-components";
import List from "./List";
import Title from "./Title";
import Projects from "./Projects";

export default ({ projects }) =>
  <Wrap>
    <List>
      <div>
        <Title>Projects</Title>
        <Projects items={projects} />
      </div>
    </List>
  </Wrap>;

const Wrap = styled.div`
  height: 100%;
  width: 250px;
  background-color: #fff;
`;
