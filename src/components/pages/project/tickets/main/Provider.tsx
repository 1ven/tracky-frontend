import * as React from "react";
import { applySpec, path } from "ramda";
import { compose, withProps, withState, withHandlers } from "recompose";
import { Ticket } from "tracky-types";
import { load } from "core/decorators";
import { historyIsLoading, request, historySelect } from "core/api";
import { connect } from "core/redux";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getReadAll } from "api/projects/tickets/readAll";
import View, { Props } from "./View";

const ticketsCondition = applySpec({
  params: {
    projectId: path(["match", "params", "projectId"])
  }
});

export default compose<any, any>(
  connect({
    isLoading: historyIsLoading(getReadAll, ticketsCondition),
    items: denormalized(historySelect(getReadAll, "data", ticketsCondition), [
      schemas.ticket
    ])
  }),
  load(({ match }) => request(getReadAll, match)),
  withProps(({ match }) => ({
    projectId: match.params.projectId
  })),
  withState("activeId", "setActiveId", void 0),
  withHandlers({
    showTicket: (p: any) => (id: Ticket["id"]) => p.setActiveId(id),
    closeTicket: (p: any) => () => p.setActiveId(void 0)
  })
)(View);
