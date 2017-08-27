import { connect } from "core/redux";
import { actions } from "components/global/Modals";
import View from "./View";
import { modals } from "./Modal";

export default connect(void 0, {
  onAdd: () => actions.showModal(modals.createProjectModal)
})(View);
