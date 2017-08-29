import * as React from "react";
import { withProps } from "recompose";
import styled from "styled-components";
import { border } from "core/colors";

const Wrap = styled.div`
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid ${border};
  padding: 6px;
`;

const Item = styled.div`
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default withProps<any, Props>(({ items }) => ({
  children: items.map((item, i) =>
    <Item key={i}>
      {item}
    </Item>
  )
}))(Wrap);

export type Props = {
  items: React.ReactNode[];
};
