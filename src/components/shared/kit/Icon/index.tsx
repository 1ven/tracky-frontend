import * as React from "react";
import { prop } from "ramda";
import styled from "styled-components";

export default styled.i.attrs({
  className: "material-icons",
  children: prop("name")
})`
  display: block;
`;
