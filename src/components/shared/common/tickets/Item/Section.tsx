import * as React from "react";
import styled from "styled-components";
import Subtitle from "components/shared/kit/Subtitle";

const Wrap = styled.div`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default ({ title, children }) =>
  <Wrap>
    <Subtitle>
      {title}
    </Subtitle>
    {children}
  </Wrap>;
