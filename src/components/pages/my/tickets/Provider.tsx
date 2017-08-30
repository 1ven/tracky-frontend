import { compose } from "recompose";
import { load } from "core/decorators";
import { isLoading, request, select } from "core/api";
import { connect } from "core/redux";
import { getEntry as getReadAll } from "api/tickets/readAll";
import { getEntry as getRemove } from "api/tickets/remove";
import Page, { Props } from "./View";

export default compose<Props, {}>(
  connect(
    {
      isLoading: isLoading(getReadAll),
      items: select(getReadAll, "data")
    },
    {
      onRemove: (ticketId: number) =>
        request(getRemove, {
          params: { ticketId }
        })
    }
  ),
  load(() => request(getReadAll))
)(Page);
