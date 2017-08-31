import * as React from "react";
import styled from "styled-components";
import { withProps } from "recompose";
import { inactive } from "core/colors";

const Wrap = styled.div`
  font-size: 14px;
  color: ${inactive};
`;

export default () => <Wrap>No tickets</Wrap>;
