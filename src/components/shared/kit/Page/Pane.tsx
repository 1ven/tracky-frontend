import * as React from "react";
import { nest } from "recompose";
import styled from "styled-components";
import { Container } from "components/shared/kit/Grid";

const Wrap = styled.div`
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  background-color: #f1f4f5;
  align-items: center;
  display: block;
  font-weight: 600;
  font-size: 14px;
`;

export default nest(Wrap, Container);
