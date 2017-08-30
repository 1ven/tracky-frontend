import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { border, primary } from "core/colors";

export const Link = styled(NavLink)`
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #000;
  margin: 0 -15px 0 -14px;
  &:hover {
    background-color: #f5f5f5;
    &:not(.active) {
      border-right: 1px solid ${border};
    }
  }
  &.active {
    background-color: ${primary};
    color: #fff;
    cursor: default;
  }
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
