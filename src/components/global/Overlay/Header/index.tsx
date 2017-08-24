import * as React from "react";
import styled from "styled-components";
import { header } from "core/colors";

export default () => <Wrap />;

const Wrap = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  background-color: ${header};
`;
