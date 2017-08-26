import { compose } from "recompose";
import { withForm } from "core/form";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getReadAll } from "api/projects/readAll";
import { getEntry as getCreate } from "api/projects/tickets/create";
import View from "./View";
import { forms } from "./meta";

export default compose(
  connect(
    {
      projects: select(getReadAll, "data"),
      isSaving: select(getCreate, "isFetching")
    },
    {
      onSubmit: ({ project: id, title, description }) =>
        request(getCreate, {
          params: {
            id
          },
          body: {
            title,
            description
          }
        })
    }
  ),
  withForm({ form: forms.createTicketForm })
)(View as any);
