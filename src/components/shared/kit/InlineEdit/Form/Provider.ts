import { withForm } from "core/form";
import View, { Props as ViewProps } from "./View";

export default withForm()(View);

export type Props = ViewProps & {
  form: string;
  initialValues: Record<string, string>;
  onSubmit: (formData) => void;
};
