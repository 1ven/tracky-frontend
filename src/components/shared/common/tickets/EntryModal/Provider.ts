import { compose } from "recompose";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getReadAll } from "api/projects/readAll";
import View, { Props as ViewProps } from "./View";

export default compose<ViewProps, Props>(
  connect({
    projects: select(getReadAll, "data")
  })
)(View);

export type Props = Pick<ViewProps, "handleSubmit" | "isSaving" | "name">;
