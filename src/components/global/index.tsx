import * as React from "react";
import { combineReducers } from "redux";
import { prop } from "ramda";
import { createStructuredSelector } from "reselect";
import { compose, branch, renderComponent } from "recompose";
import { load } from "core/decorators";
import { connect } from "core/redux";
import { select, request, isLoading } from "core/api";
import { getEntry as getReadAll } from "api/projects/readAll";
import Overlay from "./Overlay";
import Loader from "./Loader";

export default compose(
  connect(
    {
      isLoading: isLoading(getReadAll),
      projects: select(getReadAll, "data")
    },
    {
      request: () => request(getReadAll)
    }
  ),
  load(({ request }) => request())
)(
  ({ children, isLoading, projects }: any) =>
    isLoading
      ? <Loader />
      : <Overlay projects={projects}>
          {children}
        </Overlay>
);

export const reducer = () => ({});
