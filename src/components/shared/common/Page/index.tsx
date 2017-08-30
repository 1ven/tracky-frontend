import * as React from "react";
import styled from "styled-components";
import Scrollbar from "components/shared/kit/Scrollbar";
import { border } from "core/colors";

const offset = "10px 14px";

const Wrap = styled.div`
  display: flex;
  height: 100%;
`;

const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  border-right: 1px solid ${border};
  padding: ${offset};
`;

const ChildWrap = styled.div`
  height: 100%;
  padding: ${offset};
  position: relative;
  > * {
    padding-bottom: 50px;
  }
`;

const StyledScrollbar = styled(Scrollbar)`
  flex: 1;
`;

export { Link as SideLink, Item as SideItem } from "./Sidebar";

export default ({ sidebar, children }) =>
  <Wrap>
    <Sidebar>
      {sidebar}
    </Sidebar>
    <StyledScrollbar>
      <ChildWrap>
        {children}
      </ChildWrap>
    </StyledScrollbar>
  </Wrap>;
