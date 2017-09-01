import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "core/redux";
import { getProjectName } from "./selectors";
import View, { Props as ViewProps } from "./View";

export default compose<{}, Props>(
  withRouter,
  connect({
    projectName: getProjectName
  })
)(View);

export type Props = {
  children: ViewProps["children"];
  rightBar?: ViewProps["rightBar"];
};
