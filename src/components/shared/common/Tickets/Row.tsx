import * as React from "react";
import styled from "styled-components";
import { border } from "core/colors";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid ${border};
  &:first-child {
    padding-top: 0;
  }
`;

const Left = styled.div``;

const Right = styled.div`margin-left: auto;`;

export default ({ left, right }) =>
  <Wrap>
    <Left>
      {left}
    </Left>
    <Right>
      {right}
    </Right>
  </Wrap>;
