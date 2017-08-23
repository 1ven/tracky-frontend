import * as React from "react";
import glamorous from "glamorous";

export default ({ children }) =>
  <Wrap>
    {children}
  </Wrap>;

const Wrap = glamorous.div({
  height: "100%"
});
