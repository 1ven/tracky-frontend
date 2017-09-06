import * as React from "react";
import { forms } from "core/form";
import Form, { Props as FormProps } from "./Form";

export default (props: Props) =>
  !props.isEditing
    ? <div onClick={props.show}>
        {props.value}
      </div>
    : <Form form={forms.INLINE_EDIT + props.name} {...props} />;

export type Props = FormProps & {
  name: string;
  isEditing: boolean;
  value: React.ReactNode;
  show: () => void;
};
