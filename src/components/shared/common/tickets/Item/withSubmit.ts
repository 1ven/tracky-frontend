import { connect } from "core/redux";
import { historySelect, request } from "core/api";
import { getEntry as getUpdate } from "api/tickets/update";

export default (key: string) =>
  connect(
    {
      isSubmitting: historySelect(getUpdate, "isFetching", ({ id }) => ({
        params: {
          ticketId: id
        }
      }))
    },
    (dispatch, { id }) => ({
      onSubmit: formData =>
        dispatch(
          request(getUpdate, {
            params: {
              ticketId: id
            },
            body: {
              [key]: formData[key]
            },
            history: {
              groupBy: "params"
            }
          })
        )
    })
  );
