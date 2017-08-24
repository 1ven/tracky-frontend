import * as React from "react";
import styled from "styled-components";
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
import Modals, { reducer as modalsReducer } from "./Modals";

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
      : <Wrap>
          <Overlay projects={projects}>
            {children}
          </Overlay>
          <Modals />
        </Wrap>
);

const Wrap = styled.div`
  display: flex;
  height: 100%;
`;

export const reducer = combineReducers({
  modals: modalsReducer
});
