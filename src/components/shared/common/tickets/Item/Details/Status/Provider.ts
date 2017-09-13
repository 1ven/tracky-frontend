import { connect } from "core/redux";
import { historySelect, request } from "core/api";
import { getEntry as getUpdate } from "api/tickets/update";
import View from "./View";

export default connect(
  {
    isSaving: historySelect(getUpdate, "isFetching", ({ id }) => ({
      params: {
        ticketId: id
      }
    }))
  },
  (dispatch, { id }) => ({
    onChange: status =>
      dispatch(
        request(getUpdate, {
          params: {
            ticketId: id
          },
          body: {
            status
          },
          history: {
            groupBy: "params"
          }
        })
      )
  })
)(View);
