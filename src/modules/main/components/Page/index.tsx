import * as React from "react";
import { compose } from "recompose";
import Input from "shared/components/Input";

export default ({ onSubmit }: Props) =>
  <form
    onSubmit={(e: any) => {
      e.preventDefault();
      const user = e.target.user.value;
      onSubmit({ user });
    }}
  >
    Main
    <div>
      <input type="text" name="user" />
    </div>
  </form>;

export type Props = {
  onSubmit: ({ user }) => void;
};
