import { compose } from "recompose";
import { load } from "core/decorators";
import { isLoading, request, select } from "core/api";
import { withForm } from "core/form";
import { connect } from "core/redux";
import { getEntry as getReadAll } from "api/tickets/readAll";
import { getEntry as getCreate } from "api/tickets/create";
import { getEntry as getRemove } from "api/tickets/remove";
import { createTicketForm } from "./meta";
import Page, { Props } from "./View";
const paths = require("../paths");

export default compose<Props, {}>(
  connect(
    {
      isLoading: isLoading(getReadAll),
      items: select(getReadAll, "data")
    },
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
