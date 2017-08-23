import * as React from "react";
import { combineReducers } from "redux";
import { prop } from "ramda";
import { createStructuredSelector } from "reselect";
import { compose, branch, renderComponent } from "recompose";
import { connect } from "core/redux";
import Overlay from "./Overlay";
import Loader, { reducer as loaderReducer, getLoading } from "./Loader";

export default connect({
  isLoading: getLoading
})(
  ({ children, isLoading }) =>
    isLoading
      ? <Loader />
      : <Overlay>
          {children}
        </Overlay>
);

export const reducer = combineReducers({
  loader: loaderReducer
});
