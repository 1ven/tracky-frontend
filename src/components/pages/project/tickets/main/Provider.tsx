import * as React from "react";
import { mergeDeepLeft, applySpec, path } from "ramda";
import { compose, withProps, withState, withHandlers } from "recompose";
import { Ticket } from "tracky-types";
import { load } from "core/decorators";
import { historyIsLoading, request, historySelect } from "core/api";
import { connect } from "core/redux";
import { forms } from "core/form";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getReadAll } from "api/projects/tickets/readAll";
import { helpers } from "components/shared/common/tickets/Parameters";
import View, { Props } from "./View";

const ticketsCondition = applySpec({
  params: {
    projectId: path(["match", "params", "projectId"])
  }
});

// First, finish everything on frontend side

export default compose<any, any>(
  withProps(({ match }) => ({
    projectId: match.params.projectId,
    initialParameters: {
      status: 0
    }
  })),
  withState("activeId", "setActiveId", void 0),
  withHandlers({
    showTicket: (p: any) => (id: Ticket["id"]) => p.setActiveId(id),
    closeTicket: (p: any) => () => p.setActiveId(void 0),
    loadTickets: (p: any) => formData =>
      request(getReadAll, {
        params: {
          ...p.match.params,
          query: helpers.mapToQuery(formData)
        },
        history: {
          groupBy: "params.projectId"
        }
      })
  }),
  connect(
    {
      isLoading: historyIsLoading(getReadAll, ticketsCondition),
      items: denormalized(historySelect(getReadAll, "data", ticketsCondition), [
        schemas.ticket
      ])
    },
    (dispatch, ownProps) => ({
      onParametersChange: formData => dispatch(ownProps.loadTickets(formData))
    })
  ),
  load(({ loadTickets, initialParameters }) => loadTickets(initialParameters))
)(View);
