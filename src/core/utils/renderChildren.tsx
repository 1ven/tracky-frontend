import * as React from "react";
import { curry } from "ramda";

export default curry((Item, children) =>
  <div>
    {children instanceof Array
      ? children.map((item: React.ReactNode, i: number) =>
          <Item key={i}>
            {item}
          </Item>
        )
      : <Item>
          {children}
        </Item>}
  </div>
);
