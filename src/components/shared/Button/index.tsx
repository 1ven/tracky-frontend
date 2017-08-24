import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { primary } from "core/colors";

export default styled.a`
  color: #fff;
  background-color: ${primary};
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 100px;
  transition: background-color .2s;
  &:hover {
    background-color: ${darken(0.1, primary)};
  }
`;
