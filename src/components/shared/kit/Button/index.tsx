import * as React from "react";
import styled from "styled-components";
import { prop, compose } from "ramda";
import { withProps } from "recompose";
import { darken } from "polished";
import { primary, warn } from "core/colors";
import Spinner from "components/shared/kit/Spinner";

const colors = {
  blue: primary,
  red: warn
};

export default withProps(({ children, isLoading, color }: any) => ({
  children: isLoading
    ? <Spinner size={14} color="light" thikness={1} />
    : children,
  color: colors[color || "blue"]
}))(styled.button`
  color: #fff;
  background-color: ${prop("color")};
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 20px;
  border-radius: 2px;
  border: 0;
  outline: 0;
  transition: background-color .2s;
  &:hover {
    background-color: ${compose(darken(0.1), prop("color"))};
  }
`);

export type Props = {
  children: React.ReactNode;
  onClick?: Function;
  isLoading?: boolean;
  color?: string;
};
