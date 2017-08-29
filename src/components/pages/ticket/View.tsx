import * as React from "react";
import styled from "styled-components";
import { Ticket } from "tracky-types";
import { inactive } from "core/colors";
import Loader from "components/shared/kit/Loader";
import BaseTitle from "components/shared/kit/Title";

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 10px;
`;

const Description = styled.div`font-size: 14px;`;

const NoDescription = styled.div`color: ${inactive};`;

export default ({ title, description, isLoading }: Props) =>
  isLoading
    ? <Loader />
    : <div>
        <BaseTitle>Back to "tracky-backend"</BaseTitle>
        <Title>
          {title}
        </Title>
        <Description>
          {description || <NoDescription>No description</NoDescription>}
        </Description>
      </div>;

export type Props = {
  title: Ticket["title"];
  isLoading: boolean;
  description?: Ticket["description"];
};
