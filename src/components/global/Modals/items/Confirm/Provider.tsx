import { connect } from "core/redux";
import { hideModal } from "../../actions";
import View from "./View";

export default connect(void 0, (dispatch, ownProps) => ({
  onCancel() {
    dispatch(hideModal(ownProps.name));
  }
}))(View);
