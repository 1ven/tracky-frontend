import * as React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { withField } from "core/form";
import { border } from "core/colors";

const sizes = {
  normal: `
    font-size: 12px;
    padding: 0 8px;
    height: 34px;
  `,
  small: `
    font-size: 12px;
    padding: 0 6px;
    height: 28px;
  `
};

export default withField(styled.input.attrs({
  type: "text"
})`
  border: 1px solid ${border};
  border-radius: 2px;
  display: block;
  width: 100%;
  outline: 0;
  ${({ size = "normal" }: any) => sizes[size]}
  ${({ disabled }: any) =>
    disabled &&
    `
    cursor: not-allowed;
    background-color: #f1f4f5;
    color: #ccc;
  `}
`);
