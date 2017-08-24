import { compose } from "recompose";
import { withForm } from "core/form";
import { connect } from "core/redux";
import { select } from "core/api";
import { getEntry as getReadAll } from "api/projects/readAll";
import View from "./View";
import { createTicketForm } from "./meta";

export default compose(
  connect(
    {
      projects: select(getReadAll, "data")
    },
    () => ({
      onSubmit: data => console.log(data)
    })
  ),
  withForm({ form: createTicketForm })
)(View);
