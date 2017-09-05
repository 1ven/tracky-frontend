import { prop, applySpec, path } from "ramda";
import { compose, withProps } from "recompose";
import { connect } from "core/redux";
import { load } from "core/decorators";
import { request, select, isLoading } from "core/api";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getRead } from "api/tickets/read";
import View from "./View";

export default compose<any, any>(
  connect({
    isLoading: isLoading(getRead),
    ticket: denormalized(
      select(
        getRead,
        "data",
        applySpec({
          params: path(["match", "params"])
        })
      ),
      schemas.ticket
    )
  }),
  withProps(({ ticket, match }) => ({
    ...ticket,
    projectId: match.params.projectId
  })),
  load(({ match }) => request(getRead, match))
)(View);
