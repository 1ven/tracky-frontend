import * as React from "react";
import { rgba } from "polished";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const colors = {
  light: {
    bg: rgba("#fff", 0.3),
    fg: "#fff"
  },
  dark: {
    bg: "#ccc",
    fg: "#333"
  }
};

export default styled.div`
  border-radius: 50%;
  animation: ${animation} .6s linear infinite;
  ${({ color = "dark", thikness = 2 }: any) => `
    border: ${thikness}px solid ${colors[color].bg};
    border-top-color: ${colors[color].fg};
  `} ${({ size = 20 }) => `
    width: ${size}px;
    height: ${size}px;
  `};
` as any;
