import * as React from "react";
import styled from "styled-components";
import { border } from "core/colors";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid ${border};
  ${({ isActive }: any) =>
    isActive &&
    `
    background-color: #f5f5f5;
    margin: 0 -14px;
    padding-left: 14px;
    padding-right: 14px;
    border-top: 1px solid #ddd;
    margin-top: -1px;
  `};
` as any;

const Left = styled.div``;

const Right = styled.div`margin-left: auto;`;

export default ({ left, right, isActive }) =>
  <Wrap isActive={isActive}>
    <Left>
      {left}
    </Left>
    <Right>
      {right}
    </Right>
  </Wrap>;
