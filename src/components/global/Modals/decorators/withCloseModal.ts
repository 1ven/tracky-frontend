import { connect } from "core/redux";
import { actions } from "components/global/Modals";

export default connect(void 0, (dispatch, { name }) => ({
  closeModal: () => dispatch(actions.hideModal(name))
}));
