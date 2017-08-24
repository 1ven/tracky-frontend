import { connect } from "core/redux";
import { actions } from "components/global/Modals";
import View from "./View";
import { createTicketModal } from "./Modal";

export default connect(void 0, {
  onCreateTicket: () => actions.showModal(createTicketModal)
})(View);
