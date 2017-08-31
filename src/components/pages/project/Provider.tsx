import { connect } from "core/redux";
import { getProjectName } from "./selectors";
import View from "./View";

export default connect({
  projectName: getProjectName
})(View);
