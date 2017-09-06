import { applySpec, path, prop } from "ramda";
import { compose, withProps } from "recompose";
import { withForm, forms } from "core/form";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getUpdate } from "api/tickets/update";
import { modals } from "components/global/Modals";
import EntryModal from "components/shared/common/tickets/EntryModal";

const getTicketId = (state, props) => props.data.id;

export default compose(
  withProps({
    name: modals.EDIT_TICKET,
    title: "Edit a ticket"
  }),
  connect(
    {
      initialValues: compose(
        applySpec({
          title: prop("title"),
          description: prop("description"),
          project: path(["project", "id"])
        }),
        denormalized(getTicketId, schemas.ticket)
      ),
      isSaving: select(getUpdate, "isFetching")
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
