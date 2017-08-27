import { compose, equals, prop } from "ramda";
import { type } from "core/api";
import { getEntry } from "api/projects/create";
import { actions as modalActions } from "components/global/Modals";
import { modals } from "./";

export default action$ =>
  action$
    .filter(isSuccess)
    .map(() => modalActions.hideModal(modals.createProjectModal));

// TODO: move to core generic function
const isSuccess = compose(equals(type(getEntry, "success")), prop("type"));
