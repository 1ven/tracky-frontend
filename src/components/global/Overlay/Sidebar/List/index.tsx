import * as React from "react";
import styled from "styled-components";

export default ({ children }) =>
  <div>
    {children instanceof Array
      ? children.map((item: React.ReactNode, i) =>
          <Item key={i}>
            {item}
          </Item>
        )
      : <Item>
          {children}
        </Item>}
  </div>;

const Item = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
