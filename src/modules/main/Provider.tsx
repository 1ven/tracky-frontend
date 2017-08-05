import { compose, withProps } from "recompose";
import { prop } from "ramda";
import { reduxForm } from "redux-form";
import { replace } from "react-router-redux";
import { connect } from "react-redux";
import { joinUrl } from "core/utils";
import Page, { Props } from "./View";
const paths = require("modules/paths");

export default compose<Props, {}>(
  connect(null, {
    onSubmit: compose(replace, joinUrl(paths.user), prop("user"))
  }),
  reduxForm({
    form: "user"
  })
)(Page);
