import * as React from "react";
import { Project } from "tracky-types";
import { Box, Back, modals } from "components/global/Modals";
import Form, { SubmitBar } from "components/shared/kit/Form";
import Select from "components/shared/kit/Select";
import Input from "components/shared/kit/Input";
import Button from "components/shared/kit/Button";

const name = modals.CREATE_PROJECT;

export default ({ projects, handleSubmit, isSaving }) =>
  <Back name={name}>
    <Box title="Create project" name={name}>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" />
        <SubmitBar isLoading={isSaving}>
          <Button type="submit" inactive={isSaving}>
            Submit
          </Button>
        </SubmitBar>
      </Form>
    </Box>
  </Back>;
