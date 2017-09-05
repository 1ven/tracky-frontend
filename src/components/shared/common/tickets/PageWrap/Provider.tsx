import { compose } from "recompose";
import { path } from "ramda";
import { paramSelector } from "core/router";
import { schemas, denormalized } from "core/normalizr";
import { withRouter } from "react-router-dom";
import { connect } from "core/redux";
import View, { Props as ViewProps } from "./View";

export default compose<{}, Props>(
  withRouter,
  connect({
    projectName: compose(
      path(["name"]),
      denormalized(paramSelector("projectId"), schemas.project)
    )
  })
)(View);

export type Props = {
  children: ViewProps["children"];
  rightBar?: ViewProps["rightBar"];
};
