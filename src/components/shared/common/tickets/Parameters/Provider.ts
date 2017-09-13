import { withForm, forms } from "core/form";
import View from "./View";

export default withForm({
  form: forms.TICKETS_PARAMETERS
})(View);
