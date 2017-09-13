import * as React from "react";
import styled from "styled-components";

const ItemTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Wrap = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default ({ title, children }) =>
  <Wrap>
    <ItemTitle>
      {title}
    </ItemTitle>
    {children}
  </Wrap>;
