import * as React from "react";
import styled from "styled-components";
import { withProps } from "recompose";
import { darken } from "polished";
import { primary } from "core/colors";
import Spinner from "components/shared/kit/Spinner";

export default withProps(({ children, isLoading }: any) => ({
  children: isLoading
    ? <Spinner size={14} color="light" thikness={1} />
    : children
}))(styled.button`
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
`);

export type Props = {
  isLoading?: boolean;
  children: React.ReactNode;
};
