import * as React from "react";
import styled from "styled-components";
import Title from "./Title";
import Description from "./Description";

export default ({ ticket }) =>
  <div>
    <Title id={ticket.id}>
      {ticket.title}
    </Title>
    <Description id={ticket.id}>
      {ticket.description}
    </Description>
  </div>;
