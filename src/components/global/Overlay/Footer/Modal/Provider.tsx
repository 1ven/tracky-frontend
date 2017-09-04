import { compose, withProps } from "recompose";
import { withForm, forms } from "core/form";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getCreate } from "api/projects/tickets/create";
import { modals } from "components/global/Modals";
import EntryModal from "components/shared/common/tickets/EntryModal";

export default compose(
  withProps({
    name: modals.CREATE_TICKET,
    title: "Create a ticket"
  }),
  connect(
    {
      isSaving: select(getCreate, "isFetching")
    },
    {
      onSubmit: ({ project: id, title, description }) =>
        request(getCreate, {
          params: {
            projectId: id
          },
          body: {
            title,
            description
          }
        })
    }
  ),
  withForm({ form: forms.CREATE_TICKET })
)(EntryModal);
