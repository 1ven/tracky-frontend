import * as React from "react";
import styled from "styled-components";
import Button from "components/shared/kit/Button";
import Spinner from "components/shared/kit/Spinner";

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Loader = styled(Spinner).attrs({
  thikness: 1,
  size: 14
})`
  margin-right: 10px;
`;

export default ({ isLoading, children }) =>
  <Wrap>
    {isLoading && <Loader />}
    {children}
  </Wrap>;
