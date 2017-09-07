import { compose, equals, prop } from "ramda";
import { type } from "core/api";
import { getEntry } from "api/tickets/update";
import { actions, names } from "components/shared/kit/InlineEdit";

// filter on "title" id
export default action$ =>
  action$.filter(isSuccess).map(() => actions.hide(names.TICKET_TITLE));

// TODO: move to core generic function
const isSuccess = compose(equals(type(getEntry, "success")), prop("type"));
