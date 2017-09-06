import { compose, withProps, withState, withHandlers } from "recompose";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getUpdate } from "api/tickets/update";
import View from "./View";

export default compose(
  withProps(({ children }) => ({
    onSubmit: data => console.log(data),
    initialValues: {
      title: children
    }
  })),
  connect(
    {
      isSubmitting: select(getUpdate, "isFetching")
    },
    (dispatch, { id: ticketId }) => ({
      onSubmit: ({ title }) =>
        dispatch(
          request(getUpdate, {
            params: {
              ticketId
            },
            body: {
              title
            }
          })
        )
    })
  )
)(View) as any;
