import { denormalize } from "normalizr";
import { prop } from "ramda";
import { createSelector } from "reselect";

export default (selector, schema) =>
  createSelector([selector, prop("entities")], (result, entities) =>
    denormalize(result, schema, entities)
  );
