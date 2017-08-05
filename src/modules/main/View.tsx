import * as React from "react";
import { compose } from "recompose";
import Input from "shared/components/Input";

export default ({ handleSubmit }: Props) =>
  <form onSubmit={handleSubmit}>
    Main
    <div>
      <Input name="user" />
    </div>
  </form>;

export type Props = {
  handleSubmit: any;
};
