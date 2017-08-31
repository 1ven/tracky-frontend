import * as React from "react";
import { prop } from "ramda";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  font-size: 14px;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
` as any;
