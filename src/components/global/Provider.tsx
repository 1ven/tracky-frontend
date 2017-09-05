import { prop, isNil } from "ramda";
import { createStructuredSelector } from "reselect";
import { compose, branch, renderComponent } from "recompose";
import { load } from "core/decorators";
import { connect } from "core/redux";
import { historySelect, request, isLoading } from "core/api";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getReadAll } from "api/projects/readAll";
import View from "./View";

const projectsCondition = () => isNil;

export default compose(
  connect({
    isLoading: isLoading(getReadAll, projectsCondition),
    projects: denormalized(
      historySelect(getReadAll, "data", projectsCondition),
      [schemas.project]
    )
  }),
  load(() => request(getReadAll))
)(View);
