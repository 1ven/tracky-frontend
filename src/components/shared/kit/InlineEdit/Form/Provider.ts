import { compose } from "recompose";
import { withForm } from "core/form";
import { withClickOutside } from "core/decorators";
import View, { Props as ViewProps } from "./View";

export default compose<ViewProps, Props>(
  withClickOutside(p => p.hide()),
  withForm()
)(View);

export type Props = ViewProps & {
  form: string;
  initialValues: Record<string, string>;
  onSubmit: (formData) => void;
};
