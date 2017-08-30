import { createSelector } from "reselect";
import { prop } from "ramda";
import { select } from "core/api";
import { getEntry } from "api/projects/readAll";

const getProjectId = (state, props) => props.match.params.projectId;

export const getProjectName = createSelector(
  [getProjectId, select(getEntry, "data")],
  (id, items) => items.filter(item => item.id == id).map(prop("name"))
);
