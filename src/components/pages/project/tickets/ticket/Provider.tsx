import { prop } from "ramda";
import { compose, withProps } from "recompose";
import { connect } from "core/redux";
import { load } from "core/decorators";
import { request, select, isLoading } from "core/api";
import { getEntry as getRead } from "api/tickets/read";
import View from "./View";

export default compose<any, any>(
  connect({
    isLoading: isLoading(getRead),
    ticket: select(getRead, "data")
  }),
  withProps(prop("ticket")),
  load(({ match }) => request(getRead, match))
)(View);
