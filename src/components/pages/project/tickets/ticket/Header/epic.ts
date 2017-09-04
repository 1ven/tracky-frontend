import { compose, equals, prop } from "ramda";
import { type } from "core/api";
import { modals, actions } from "components/global/Modals";
import { getEntry } from "api/tickets/update";

export default action$ =>
  action$.filter(isSuccess).map(() => actions.hideModal(modals.EDIT_TICKET));

// TODO: move to core generic function
const isSuccess = compose(equals(type(getEntry, "success")), prop("type"));
