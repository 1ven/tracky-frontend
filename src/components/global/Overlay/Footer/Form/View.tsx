import * as React from "react";
import { Project } from "tracky-types";
import Form from "components/shared/kit/Form";
import Select from "components/shared/kit/Select";
import Input from "components/shared/kit/Input";
import Textarea from "components/shared/kit/Textarea";
import Button from "components/shared/kit/Button";

export default ({ projects, handleSubmit, isSaving }: any) =>
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
    <Button type="submit" isLoading={isSaving}>
      Submit
    </Button>
  </Form>;

export type Props = {
  projects: Project[];
};
