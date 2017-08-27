import { compose } from "recompose";
import { withForm } from "core/form";
import { connect } from "core/redux";
import { select, request } from "core/api";
import { getEntry as getCreate } from "api/projects/create";
import View from "./View";
import { forms } from "./meta";

export default compose(
  connect(
    {
      isSaving: select(getCreate, "isFetching")
    },
    {
      onSubmit: ({ name }) =>
        request(getCreate, {
          body: {
            name
          }
        })
    }
  ),
  withForm({ form: forms.createProjectForm })
)(View as any);
