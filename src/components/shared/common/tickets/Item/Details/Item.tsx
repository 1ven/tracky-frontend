import * as React from "react";
import styled from "styled-components";
import Spinner from "components/shared/kit/Spinner";

const Wrap = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.div`margin-right: 8px;`;

const Loader = styled(Spinner).attrs({
  size: 10,
  thikness: 1
})`
  margin-left: 6px;
`;

export default ({ title, children, isLoading }: Props) =>
  <Wrap>
    <Title>
      {title}
    </Title>
    {children}
    {isLoading && <Loader />}
  </Wrap>;

export type Props = {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
};
