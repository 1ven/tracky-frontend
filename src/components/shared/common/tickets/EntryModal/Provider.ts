import { isNil } from "ramda";
import { compose } from "recompose";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getReadAll } from "api/projects/readAll";
import View, { Props as ViewProps } from "./View";

export default compose<ViewProps, Props>(
  connect({
    projects: denormalized(select(getReadAll, "data", () => isNil), [
      schemas.project
    ])
  })
)(View);

export type Props = Pick<ViewProps, "handleSubmit" | "isSaving" | "name">;
