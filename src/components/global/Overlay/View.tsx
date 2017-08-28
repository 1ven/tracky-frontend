import * as React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children, projects, isSidebarVisible, onMenuClick }) =>
  <Wrap>
    <Header onMenuClick={onMenuClick} isSidebarVisible={isSidebarVisible} />
    <ContentWrap>
      {isSidebarVisible && <Sidebar projects={projects} />}
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RightWrap = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;
