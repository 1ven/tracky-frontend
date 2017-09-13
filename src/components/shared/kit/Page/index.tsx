import * as React from "react";
import styled from "styled-components";
import Scrollbar from "components/shared/kit/Scrollbar";
import { border } from "core/colors";
import Pane from "./Pane";

const offset = "10px 14px";

const Wrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const BodyWrap = styled.div`
  display: flex;
  height: 100%;
`;

const Leftbar = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  border-right: 1px solid ${border};
  padding: ${offset};
`;

const Rightbar = styled.div`
  height: 100%;
  display: flex;
  border-left: 1px solid ${border};
  padding: ${offset};
`;

const ChildWrap = styled.div`
  height: 100%;
  padding: ${offset};
  position: relative;
`;

const Children = styled.div`padding-bottom: 50px;`;

const StyledScrollbar = styled(Scrollbar)`
  flex: 1;
`;

export { Link as LeftLink, Item as LeftItem } from "./Leftbar";

export default ({ leftBar, rightBar, children, title }: Props) =>
  <Wrap>
    <Pane>
      {title}
    </Pane>
    <BodyWrap>
      {leftBar &&
        <Leftbar>
          {leftBar}
        </Leftbar>}
      <StyledScrollbar>
        <ChildWrap>
          <Children>
            {children}
          </Children>
        </ChildWrap>
      </StyledScrollbar>
      {rightBar &&
        <Rightbar>
          {rightBar}
        </Rightbar>}
    </BodyWrap>
  </Wrap>;

export type Props = {
  title: string;
  children: React.ReactNode;
  leftBar?: React.ReactNode;
  rightBar?: React.ReactNode;
};
