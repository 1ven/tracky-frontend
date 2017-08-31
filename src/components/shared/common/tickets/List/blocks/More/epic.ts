import { compose, equals, prop } from "ramda";
import { type } from "core/api";
import { getEntry } from "api/tickets/remove";
import { modals, actions } from "components/global/Modals";

export default action$ =>
  action$.filter(isSuccess).map(() => actions.hideModal(modals.REMOVE_TICKET));

// TODO: move to core generic function
const isSuccess = compose(equals(type(getEntry, "success")), prop("type"));
