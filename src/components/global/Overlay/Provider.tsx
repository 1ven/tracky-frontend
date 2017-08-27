import { connect } from "core/redux";
import { toggleSidebar } from "./actions";
import { isSidebarVisible } from "./reducer";
import View from "./View";

export default connect(
  {
    isSidebarVisible: isSidebarVisible
  },
  {
    onMenuClick: toggleSidebar
  }
)(View);
