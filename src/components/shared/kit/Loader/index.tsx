import * as React from "react";
import styled from "styled-components";
import Spinner from "../Spinner";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default () =>
  <Wrap>
    <Spinner />
  </Wrap>;
