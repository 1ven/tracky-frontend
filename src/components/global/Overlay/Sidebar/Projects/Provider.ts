import { connect } from "core/redux";
import { modals, actions } from "components/global/Modals";
import View from "./View";

export default connect(void 0, {
  onAdd: () => actions.showModal(modals.CREATE_PROJECT)
})(View);
