import * as React from "react";
import { compose } from "recompose";
import { withField } from "core/form";

export default compose<any, any>(withField)(props =>
  <input type="text" {...props} />
);
