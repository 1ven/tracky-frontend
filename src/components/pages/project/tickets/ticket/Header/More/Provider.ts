import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "core/redux";
import { modals, actions } from "components/global/Modals";
import View from "./View";

export default compose(
  withRouter,
  connect(void 0, (dispatch, { match }) => ({
    onEditClick: () =>
      dispatch(
        actions.showModal(modals.EDIT_TICKET, { id: match.params.ticketId })
      )
  }))
)(View as any);
