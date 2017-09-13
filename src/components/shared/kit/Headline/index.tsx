import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import { border } from "core/colors";

const Title = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  > a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Line = styled.div`
  margin-bottom: 5px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${border};
  display: flex;
  align-items: center;
`;

const Right = styled.div`margin-left: auto;`;

export default ({ children, right }: Props) =>
  <Line>
    <Title>
      {children}
    </Title>
    {right &&
      <Right>
        {right}
      </Right>}
  </Line>;

export type Props = {
  children: React.ReactNode;
  right?: React.ReactNode;
};
