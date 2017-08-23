import * as React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Wrap = styled.div`
  height: 100%;
  display: flex;
`;

export default ({ children, projects }) =>
  <Wrap>
    <Sidebar projects={projects} />
    {children}
  </Wrap>;
