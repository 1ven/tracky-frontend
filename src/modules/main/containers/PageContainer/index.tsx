import { compose, withProps } from "recompose";
import { prop } from "ramda";
import { withRouter, RouterProps } from "core/router";
import { joinUrl } from "core/utils";
import Page, { Props } from "../../components/Page";
const paths = require("modules/paths");

export default compose<Props, {}>(
  withRouter,
  withProps(({ history }: RouterProps<{}>) => ({
    onSubmit: compose(history.replace, joinUrl(paths.user), prop("user"))
  }))
)(Page);
