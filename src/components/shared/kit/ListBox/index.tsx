import * as React from "react";
import { withProps } from "recompose";
import styled from "styled-components";
import Box from "components/shared/kit/Box";

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
}))(Box);

export type Props = {
  items: React.ReactNode[];
};
