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

const sizes = {
  normal: `
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
  `,
  small: `
    font-size: 10px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
  `
};

const addProps = withProps(
  ({ children, isLoading, color, onClick, inactive }: any) => ({
    onClick: e => (inactive ? e.preventDefault() : onClick && onClick(e)),

    children: isLoading
      ? <Spinner size={14} color="light" thikness={1} />
      : children,

    color: colors[color || "blue"]
  })
);

export default addProps(styled.button`
  color: #fff;
  background-color: ${prop("color")};
  cursor: pointer;
  display: inline-block;
  border-radius: 2px;
  border: 0;
  outline: 0;
  transition: background-color .2s;
  ${({ inactive, color }: any) =>
    inactive
      ? `
    transition: none;
    background-color: #ddd;
    cursor: not-allowed;
  `
      : `
    &:hover {
      background-color: ${darken(0.1, color)};
    }
  `};
  ${({ size = "normal" }: any) => sizes[size]};
`);

export type Props = {
  children: React.ReactNode;
  inactive?: boolean;
  onClick?: Function;
  isLoading?: boolean;
  color?: string;
};
