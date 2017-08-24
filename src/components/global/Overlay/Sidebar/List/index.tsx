import * as React from "react";
import styled from "styled-components";
import { renderChildren } from "core/utils";

export default ({ children }) => renderChildren(Item, children);

const Item = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
