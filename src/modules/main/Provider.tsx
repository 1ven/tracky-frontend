import { compose, withProps } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { reduxForm, getFormValues } from "redux-form";
import { load } from "core/decorators";
import { request, select } from "core/api";
import { getEntry as getReposEntry } from "api/repos";
const paths = require("modules/paths");
import { setVisible } from "./actions";
import { getVisible } from "./reducer";
import { getReposNames } from "./selectors";
import Page, { Props } from "./View";

export default compose<Props, {}>(
  connect(
    createStructuredSelector({
      isLoading: select(getReposEntry, "isFetching"),
      formData: getFormValues("username"),
      items: getReposNames,
      visible: getVisible
    }),
    {
      onSubmit: ({ username: name }) =>
        request(getReposEntry, { params: { name } }),
      setVisible
    }
  ),
  reduxForm({
    form: "username"
  })
)(Page);
