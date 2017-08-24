import * as React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { background } from "core/colors";

export default ({ children, projects }) =>
  <Wrap>
    <Header />
    <ContentWrap>
      <Sidebar projects={projects} />
      <RightWrap>
        {children}
        <Footer />
      </RightWrap>
    </ContentWrap>
  </Wrap>;

const ContentWrap = styled.div`
  height: 100%;
  display: flex;
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${background};
`;

const RightWrap = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;
