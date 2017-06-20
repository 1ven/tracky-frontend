import { compose, withProps } from "recompose";
import { reduxForm } from "redux-form";
import { prop } from "ramda";
import { replace } from "react-router-redux";
import { connect } from "react-redux";
import { joinUrl } from "core/utils";
import paths from "modules/paths";
import Page from "../../components/Page";

export default compose(
  connect(null, {
    onSubmit: compose(replace, joinUrl(paths.user), prop("user"))
  }),
  reduxForm({
    form: "user"
  })
)(Page);
