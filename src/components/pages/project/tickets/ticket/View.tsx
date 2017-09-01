import * as React from "react";
import { nest } from "recompose";
import styled from "styled-components";
import { Ticket, Project } from "tracky-types";
import Loader from "components/shared/kit/Loader";
import Item from "components/shared/common/tickets/Item";
import Header from "./Header";

export default ({ title, description, isLoading, projectId }: Props) =>
  isLoading
    ? <Loader />
    : <div>
        <Header projectId={projectId} />
        <Item title={title} description={description} />
      </div>;

export type Props = {
  title: Ticket["title"];
  projectId: Project["id"];
  isLoading: boolean;
  description?: Ticket["description"];
};
