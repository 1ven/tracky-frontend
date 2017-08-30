import * as React from "react";
import styled from "styled-components";
import Icon from "components/shared/kit/Icon";

export default ({ isActive }) =>
  <Wrap>
    <Link className={isActive && "active"}>
      <Line />
      <Line />
      <Line />
    </Link>
  </Wrap>;

const MenuIcon = styled(Icon).attrs({ name: "reorder" })`
  color: #e4e4e4;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const Link = styled.div`
  width: 20px;
  cursor: pointer;
  &:hover > *,
  &.active > * {
    background-color: #fff;
  }
`;

const Line = styled.div`
  width: 100%;
  display: block;
  height: 2px;
  background-color: #e4e4e4;
  margin-bottom: 3px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #e4e4e4;
`;
