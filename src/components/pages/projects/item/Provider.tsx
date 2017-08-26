import * as React from "react";
import { compose } from "recompose";
import { load } from "core/decorators";
import { isLoading, request, select } from "core/api";
import { connect } from "core/redux";
import { getEntry as getReadAll } from "api/projects/tickets/readAll";
import View, { Props } from "./View";

export default compose<any, any>(
  connect({
    isLoading: isLoading(getReadAll),
    items: select(getReadAll, "data")
  }),
  load(({ match }) => request(getReadAll, match))
)(View);
