import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { load } from "core/decorators";
import { request, select } from "core/api";
import { withForm } from "core/form";
import { getEntry as getReadAll } from "api/tickets/readAll";
import { getEntry as getCreate } from "api/tickets/create";
import { getEntry as getRemove } from "api/tickets/remove";
import { createTicketForm } from "./meta";
import Page, { Props } from "./View";
const paths = require("pages/paths");

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
  withForm({
    form: createTicketForm
  })
)(Page);