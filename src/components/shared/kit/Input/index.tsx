import * as React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { withField } from "core/form";
import { border } from "core/colors";

export default withField(styled.input.attrs({
  type: "text"
})`
  border: 1px solid ${border};
  border-radius: 2px;
  display: block;
  width: 100%;
  outline: 0;
  font-size: 12px;
  padding: 0 8px;
  height: 34px;
`);
