import * as React from "react";
import { connect } from "core/redux";
import { compose, withProps } from "recompose";
import { Confirm, modals } from "components/global/Modals";
import { request, select } from "core/api";
import { getEntry as getRemove } from "api/tickets/remove";

export default compose(
  withProps({
    type: "warning",
    title: "Remove ticket",
    text: "This ticket will be removed. Are you sure?",
    name: modals.REMOVE_TICKET
  }),
  connect(
    {
      isConfirming: select(getRemove, "isFetching")
    },
    (dispatch, { data }) => ({
      onConfirm() {
        dispatch(
          request(getRemove, {
            params: {
              id: data.id
            }
          })
        );
      }
    })
  )
)(Confirm);
