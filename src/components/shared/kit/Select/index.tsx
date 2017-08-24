import * as React from "react";
import styled from "styled-components";
import { withField } from "core/form";
import { border } from "core/colors";
import Icon from "components/shared/kit/Icon";

export default props =>
  <Wrap>
    <Field {...props} />
    <Chev />
  </Wrap>;

const Wrap = styled.div`position: relative;`;

const Chev = styled(Icon).attrs({ name: "expand_more" })`
  position: absolute;
  height: 100%;
  top: 0;
  right: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Field = withField(styled.select`
  display: block;
  width: 100%;
  height: 34px;
  appearance: none;
  background-color: #fff;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${border};
  border-radius: 2px;
  outline: none;
`);
