import * as React from "react";
import { nest } from "recompose";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { paths } from "core/router";
import { Container } from "components/shared/kit/Grid";
import MenuLink from "./MenuLink";
import OverMenu from "./OverMenu";

export default ({ onMenuClick, isSidebarVisible }) =>
  <Wrap>
    <Container>
      <InnerWrap>
        <MenuLink onClick={onMenuClick} isActive={isSidebarVisible} />
        <Item>
          <Link to={paths.ME} exact>
            Me
          </Link>
        </Item>
      </InnerWrap>
    </Container>
    {isSidebarVisible && <OverMenu />}
  </Wrap>;

const Link = styled(NavLink)`
  font-size: 14px;
  color: #e4e4e4;
  text-decoration: none;
  display: block;
  &:hover, &.active {
    color: #fff;
  }
`;

const Item = styled.div`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Wrap = styled.div`
  height: 44px;
  width: 100%;
  background-color: #1b1b1b;
`;
