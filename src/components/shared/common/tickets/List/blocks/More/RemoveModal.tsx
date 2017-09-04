import * as React from "react";
import { applySpec, path } from "ramda";
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
      isConfirming: select(
        getRemove,
        "isFetching",
        applySpec({
          params: {
            ticketId: path(["data", "id"])
          }
        })
      )
    },
    (dispatch, { data }) => ({
      onConfirm() {
        dispatch(
          request(getRemove, {
            params: {
              ticketId: data.id
            }
          })
        );
      }
    })
  )
)(Confirm);
