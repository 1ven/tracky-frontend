import { compose } from "recompose";
import { withForm, forms } from "core/form";
import { connect } from "core/redux";
import { historySelect, request } from "core/api";
import { getEntry as getCreate } from "api/projects/create";
import View from "./View";

export default compose(
  connect(
    {
      isSaving: historySelect(getCreate, "isFetching")
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
  withForm({ form: forms.CREATE_PROJECT })
)(View as any);
