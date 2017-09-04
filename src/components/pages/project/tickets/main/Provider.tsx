import * as React from "react";
import { applySpec, path } from "ramda";
import { compose, withProps, withState, withHandlers } from "recompose";
import { Ticket } from "tracky-types";
import { load } from "core/decorators";
import { isLoading, request, select } from "core/api";
import { connect } from "core/redux";
import { getEntry as getReadAll } from "api/projects/tickets/readAll";
import View, { Props } from "./View";

export default compose<any, any>(
  connect({
    isLoading: isLoading(getReadAll),
    items: select(
      getReadAll,
      "data",
      applySpec({
        params: {
          projectId: path(["match", "params", "projectId"])
        }
      })
    )
  }),
  load(({ match }) => request(getReadAll, match)),
  withProps(({ match }) => ({
    projectId: match.params.projectId
  })),
  withState("activeTicket", "setActiveTicket", void 0),
  withHandlers({
    showTicket: (p: any) => (t: Ticket) => p.setActiveTicket(t),
    closeTicket: (p: any) => () => p.setActiveTicket(void 0)
  })
)(View);
