import { compose, equals, prop } from "ramda";
import { type } from "core/api";
import { getEntry } from "api/projects/create";
import { actions, modals } from "components/global/Modals";

export default action$ =>
  action$.filter(isSuccess).map(() => actions.hideModal(modals.CREATE_PROJECT));

// TODO: move to core generic function
const isSuccess = compose(equals(type(getEntry, "success")), prop("type"));
