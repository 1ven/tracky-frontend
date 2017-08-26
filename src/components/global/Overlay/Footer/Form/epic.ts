import { compose, equals, prop } from "ramda";
import { type } from "core/api";
import { getEntry } from "api/projects/tickets/create";
import { actions as modalActions } from "components/global/Modals";
import { modals } from "../Modal";

export default action$ =>
  action$
    .filter(isSuccess)
    .map(() => modalActions.hideModal(modals.createTicketModal));

// TODO: move to core generic function
const isSuccess = compose(equals(type(getEntry, "success")), prop("type"));
