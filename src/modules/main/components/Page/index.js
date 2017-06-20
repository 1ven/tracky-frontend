import React from "react";
import { compose } from "recompose";
import { withField } from "core/form";
import Input from "shared/components/Input";

export default ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <Input name="user" />
  </form>;
