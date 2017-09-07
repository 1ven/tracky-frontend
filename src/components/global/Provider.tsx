import { prop } from "ramda";
import { createStructuredSelector } from "reselect";
import { compose, branch, renderComponent } from "recompose";
import { load } from "core/decorators";
import { connect } from "core/redux";
import { select, request, isLoading } from "core/api";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getReadAll } from "api/projects/readAll";
import View from "./View";

export default compose(
  connect({
    isLoading: isLoading(getReadAll),
    projects: denormalized(select(getReadAll, "data"), [schemas.project])
  }),
  load(() => request(getReadAll))
)(View);
