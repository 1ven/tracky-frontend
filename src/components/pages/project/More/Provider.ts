import { connect } from "core/redux";
import View from "./View";
import { actions, modals } from "components/global/Modals";

export default connect(void 0, (dispatch, { id }) => ({
  onRemoveClick: () => dispatch(actions.showModal(modals.REMOVE_TICKET, { id }))
}))(View);
