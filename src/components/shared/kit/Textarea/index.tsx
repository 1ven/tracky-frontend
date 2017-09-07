import * as React from "react";
import styled from "styled-components";
import { withField } from "core/form";
import { border } from "core/colors";

export default withField(
  styled.textarea`
    border: 1px solid ${border};
    border-radius: 2px;
    display: block;
    width: 100%;
    font-size: 12px;
    padding: 8px;
    outline: 0;
    ${({ disabled }: any) =>
      disabled &&
      `
      cursor: not-allowed;
      background-color: #f1f4f5;
      color: #ccc;
    `};
  `
);
