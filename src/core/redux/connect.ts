import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

export default (stateSpec?, dispatchSpec?) =>
  connect(stateSpec && createStructuredSelector(stateSpec), dispatchSpec);
