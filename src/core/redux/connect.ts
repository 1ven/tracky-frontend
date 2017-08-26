import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

export default (stateSpec, dispatchSpec?, config?) =>
  connect(
    stateSpec && createStructuredSelector(stateSpec),
    dispatchSpec,
    null,
    config
  );
