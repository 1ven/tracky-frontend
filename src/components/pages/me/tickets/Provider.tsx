import { compose } from "recompose";
import { isNil } from "ramda";
import { load } from "core/decorators";
import { isLoading, request, select } from "core/api";
import { connect } from "core/redux";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getReadAll } from "api/tickets/readAll";
import { getEntry as getRemove } from "api/tickets/remove";
import Page, { Props } from "./View";

const ticketsCondition = () => isNil;

export default compose<Props, {}>(
  connect(
    {
      isLoading: isLoading(getReadAll, ticketsCondition),
      items: denormalized(select(getReadAll, "data", ticketsCondition), [
        schemas.ticket
      ])
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
