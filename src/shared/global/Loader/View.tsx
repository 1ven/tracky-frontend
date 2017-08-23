import * as React from "react";
import glamorous from "glamorous";

export default () => <Wrap>Loading...</Wrap>;

const Wrap = glamorous.div({
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0
});
