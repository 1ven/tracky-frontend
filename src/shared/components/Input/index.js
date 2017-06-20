import React from "react";
import { compose } from "recompose";
import { withField } from "core/form";

export default compose(withField)(props => <input type="text" {...props} />);
