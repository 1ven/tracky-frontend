import * as React from "react";
import styled from "styled-components";
import { withField } from "core/form";
import { border } from "core/colors";
import Icon from "components/shared/kit/Icon";

const sizes = {
  normal: {
    chev: `
      right: 8px;
      font-size: 16px;
    `,
    wrap: `
      padding: 0 24px 0 8px;
      height: 34px;
      font-size: 12px;
    `
  },
  small: {
    chev: `
      right: 4px;
      font-size: 14px;
    `,
    wrap: `
      font-size: 11px;
      padding: 0 20px 0 6px;
      height: 28px;
    `
  }
};

export default props =>
  <Wrap>
    <Field {...props} />
    <Chev size={props.size} />
  </Wrap>;

const Wrap = styled.div`position: relative;`;

const Chev = styled(Icon).attrs({ name: "expand_more" })`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  ${({ size = "normal" }: any) => sizes[size].chev}
` as any;

const Field = withField(styled.select`
  display: block;
  width: 100%;
  appearance: none;
  background-color: #fff;
  border: 1px solid ${border};
  border-radius: 2px;
  outline: none;
  line-height: 1;
  ${({ size = "normal" }: any) => sizes[size].wrap};
`);
