import { compose } from "recompose";
import { load } from "core/decorators";
import { isLoading, request, select } from "core/api";
import { connect } from "core/redux";
import { getEntry as getReadAll } from "api/projects/tickets/readAll";
import Page, { Props } from "./View";

export default compose<Props, {}>(
  connect(
    {
      isLoading: isLoading(getReadAll),
      items: select(getReadAll, "data")
    },
    {
      request: ({ id }) =>
        request(getReadAll, {
          params: { id }
        })
    }
  ),
  load(({ request, match }) => request(match.params))
)(Page);
