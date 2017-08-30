import { connect } from "core/redux";
import { compose, withProps } from "recompose";
import { getProjectName } from "./selectors";
import View from "./View";

export default compose(
  connect({
    name: getProjectName
  }),
  withProps(({ match }) => match.params)
)(View);
