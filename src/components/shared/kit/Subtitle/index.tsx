import * as React from "react";
import styled from "styled-components";
import { border } from "core/colors";

export default styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${border};
    margin-left: 6px;
  }
`;
