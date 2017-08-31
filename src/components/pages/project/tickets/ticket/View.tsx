import * as React from "react";
import { nest } from "recompose";
import styled from "styled-components";
import { Ticket, Project } from "tracky-types";
import { inactive } from "core/colors";
import Loader from "components/shared/kit/Loader";
import Header from "./Header";

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Description = styled.div`font-size: 14px;`;

const NoDescription = styled.div`color: ${inactive};`;

export default ({ title, description, isLoading, projectId }: Props) =>
  isLoading
    ? <Loader />
    : <div>
        <Header projectId={projectId} />
        <Title>
          {title}
        </Title>
        <Description>
          {description || <NoDescription>No description</NoDescription>}
        </Description>
      </div>;

export type Props = {
  title: Ticket["title"];
  projectId: Project["id"];
  isLoading: boolean;
  description?: Ticket["description"];
};
