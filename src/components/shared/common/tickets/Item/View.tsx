import * as React from "react";
import styled from "styled-components";
import { inactive } from "core/colors";
import Title from "./Title";

const Description = styled.div`font-size: 14px;`;

const NoDescription = styled.div`color: ${inactive};`;

export default ({ ticket }) =>
  <div>
    <Title id={ticket.id}>
      {ticket.title}
    </Title>
    <Description>
      {ticket.description || <NoDescription>No description</NoDescription>}
    </Description>
  </div>;
