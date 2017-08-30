import * as React from "react";
import styled from "styled-components";
import Scrollbar from "components/shared/kit/Scrollbar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children, projects, isSidebarVisible, onMenuClick }) =>
  <Wrap>
    <Header onMenuClick={onMenuClick} isSidebarVisible={isSidebarVisible} />
    {children}
    <Footer />
  </Wrap>;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
