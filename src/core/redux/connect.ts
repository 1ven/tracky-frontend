import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

export default (stateSpec, dispatchSpec?) =>
  connect(createStructuredSelector(stateSpec), dispatchSpec);
