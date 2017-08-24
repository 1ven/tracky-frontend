import { connect } from "core/redux";
import { actions } from "components/global/Modals";
import View from "./View";

export default connect(void 0, {
  onClose: name => actions.hideModal(name)
})(View);
