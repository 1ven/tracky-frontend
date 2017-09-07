import { prop, applySpec, path } from "ramda";
import { compose, withProps } from "recompose";
import { connect } from "core/redux";
import { load } from "core/decorators";
import { request, historySelect, historyIsLoading } from "core/api";
import { getEntry as getRead } from "api/tickets/read";
import View from "./View";

export default compose<any, any>(
  connect({
    isLoading: historyIsLoading(
      getRead,
      applySpec({
        params: path(["match", "params"])
      })
    )
  }),
  withProps(({ match }) => match.params),
  load(({ match }) => request(getRead, match))
)(View);
