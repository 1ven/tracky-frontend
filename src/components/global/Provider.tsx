import { prop, isNil } from "ramda";
import { createStructuredSelector } from "reselect";
import { compose, branch, renderComponent } from "recompose";
import { load } from "core/decorators";
import { connect } from "core/redux";
import { select, request, isLoading } from "core/api";
import { getEntry as getReadAll } from "api/projects/readAll";
import View from "./View";

export default compose(
  connect({
    isLoading: isLoading(getReadAll),
    projects: select(getReadAll, "data", () => isNil)
  }),
  load(() => request(getReadAll))
)(View);
