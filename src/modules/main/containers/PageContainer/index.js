import { compose, withProps } from "recompose";
import { reduxForm } from "redux-form";
import Page from "../../components/Page";

export default compose(
  withProps({
    onSubmit: data => {
      console.log(data);
    }
  }),
  reduxForm({
    form: "user"
  })
)(Page);
