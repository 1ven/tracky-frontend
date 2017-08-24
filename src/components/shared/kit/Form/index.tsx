import * as React from "react";
import styled from "styled-components";
import { mapProps } from "recompose";
import { renderChildren } from "core/utils";

// TODO: add validation view

export const Label = styled.label``;

export default ({ children, onSubmit }: any) =>
  <form onSubmit={onSubmit}>
    {renderChildren(Item, children)}
  </form>;

const Item = styled.div`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;
