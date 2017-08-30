import { compose } from "recompose";
import { withForm, forms } from "core/form";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getReadAll } from "api/projects/readAll";
import { getEntry as getCreate } from "api/projects/tickets/create";
import View from "./View";

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
)(View as any);
