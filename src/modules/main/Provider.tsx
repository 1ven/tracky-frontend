import { compose } from "recompose";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createStructuredSelector } from "reselect";
import { load } from "core/decorators";
import { request, select } from "core/api";
import { getEntry as getReadAll } from "api/tickets/readAll";
import { getEntry as getCreate } from "api/tickets/create";
import { getEntry as getRemove } from "api/tickets/remove";
import { createTicketForm } from "./meta";
import Page, { Props } from "./View";
const paths = require("modules/paths");

export default compose<Props, {}>(
  connect(
    createStructuredSelector({
      isLoading: select(getReadAll, "isFetching"),
      items: select(getReadAll, "data")
    }),
    {
      request: () => request(getReadAll),
      onSubmit: ({ title }) =>
        request(getCreate, {
          body: {
            title
          }
        }),
      onRemove: (id: number) =>
        request(getRemove, {
          params: { id }
        })
    }
  ),
  load(({ request }) => request()),
  reduxForm({
    form: createTicketForm
  })
)(Page);
