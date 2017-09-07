import { connect } from "core/redux";
import { remove } from "./actions";
import { getItems } from "./reducer";
import View from "./View";

export default connect(
  {
    items: getItems
  },
  {
    remove
  }
)(View);
