import { applySpec, path } from "ramda";
import { compose, withProps } from "recompose";
import { withForm, forms } from "core/form";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getUpdate } from "api/tickets/update";
import { modals } from "components/global/Modals";
import EntryModal from "components/shared/common/tickets/EntryModal";

export default compose(
  withProps({
    name: modals.EDIT_TICKET,
    title: "Edit a ticket"
  }),
  connect(
    {
      isSaving: select(
        getUpdate,
        "isFetching",
        applySpec({
          params: {
            ticketId: path(["data", "id"])
          }
        })
      )
    },
    (dispatch, { data }) => ({
      onSubmit: ({ project, title, description }) =>
        dispatch(
          request(getUpdate, {
            params: {
              ticketId: data.id
            },
            body: {
              title,
              description,
              project
            }
          })
        )
    })
  ),
  withForm({ form: forms.EDIT_TICKET })
)(EntryModal);
