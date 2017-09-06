import { prop, applySpec, path } from "ramda";
import { compose } from "recompose";
import { connect } from "core/redux";
import { historySelect } from "core/api";
import { denormalized, schemas } from "core/normalizr";
import { getEntry as getRead } from "api/tickets/read";
import View from "./View";

export default connect({
  ticket: denormalized((_, props) => props.id, schemas.ticket)
})(View);
