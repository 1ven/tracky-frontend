import * as React from "react";
import { Project } from "tracky-types";
import { modals } from "components/global/Modals";
import Form from "components/shared/kit/Form";
import Select from "components/shared/kit/Select";
import Input from "components/shared/kit/Input";
import Button from "components/shared/kit/Button";
import Box from "components/shared/modal/Box";
import Back from "components/shared/modal/Back";

export default ({ projects, handleSubmit, isSaving }) =>
  <Back>
    <Box title="Create project" name={modals.CREATE_PROJECT}>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" />
        <Button type="submit" isLoading={isSaving}>
          Submit
        </Button>
      </Form>
    </Box>
  </Back>;
