import * as React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default ({ children, projects }) =>
  <Wrap>
    <Sidebar projects={projects} />
    <RightWrap>
      <Header />
      {children}
    </RightWrap>
  </Wrap>;

const Wrap = styled.div`
  height: 100%;
  display: flex;
`;

const RightWrap = styled.div`flex: 1;`;
