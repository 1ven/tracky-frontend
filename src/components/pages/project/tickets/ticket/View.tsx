import * as React from "react";
import { nest } from "recompose";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Ticket, Project } from "tracky-types";
import { inactive } from "core/colors";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Loader from "components/shared/kit/Loader";
import BaseTitle from "components/shared/kit/Title";

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 8px;
`;

const ToProject = styled(nest(BaseTitle, NavLink))`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
` as any;

const Description = styled.div`font-size: 14px;`;

const NoDescription = styled.div`color: ${inactive};`;

export default ({ title, description, isLoading, projectId }: Props) =>
  isLoading
    ? <Loader />
    : <div>
        <ToProject to={replaceParams(paths.PROJECT_TICKETS, { projectId })}>
          Back to project
        </ToProject>
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
