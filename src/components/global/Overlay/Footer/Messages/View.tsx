import * as React from "react";
import styled from "styled-components";
import { Message } from "./";

const Item = styled.div`
  background-color: #1b1b1b;
  padding: 7px 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  color: #e4e4e4;
  border-radius: 2px;
  max-width: 260px;
  width: 100%;
  line-height: 1.4;
  &:first-child {
    margin-top: 0;
  }
`;

export default ({ items, remove }: Props) =>
  <div>
    {items.map((item, i) =>
      <Item key={i} onClick={() => remove(i)}>
        {item.text}
      </Item>
    )}
  </div>;

export type Props = {
  items: Message[];
  remove: (i: number) => void;
};
