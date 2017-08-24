import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { primary } from "core/colors";

export default styled.button`
  color: #fff;
  background-color: ${primary};
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 20px;
  border-radius: 100px;
  border: 0;
  outline: 0;
  transition: background-color .2s;
  &:hover {
    background-color: ${darken(0.1, primary)};
  }
`;
