import * as React from "react";
import { Project } from "tracky-types";
import Select from "components/shared/kit/Select";
import Input from "components/shared/kit/Input";
import Textarea from "components/shared/kit/Textarea";
import Button from "components/shared/kit/Button";
import Form, { SubmitBar } from "components/shared/kit/Form";
import { Box, Back, modals } from "components/global/Modals";

export default ({ projects, handleSubmit, isSaving, name, title }: Props) =>
  <Back name={name}>
    <Box title={title} name={name}>
      <Form onSubmit={handleSubmit}>
        <Input name="title" placeholder="Title" />
        <Select name="project">
          <option value="">Select a project</option>
          {projects.map((p, i) =>
            <option key={i} value={p.id}>
              {p.name}
            </option>
          )}
        </Select>
        <Textarea name="description" placeholder="Description" rows="8" />
        <SubmitBar isLoading={isSaving}>
          <Button type="submit" inactive={isSaving}>
            Submit
          </Button>
        </SubmitBar>
      </Form>
    </Box>
  </Back>;

export type Props = {
  projects: Project[];
  handleSubmit: Function;
  isSaving: boolean;
  title: string;
  name: string;
};
