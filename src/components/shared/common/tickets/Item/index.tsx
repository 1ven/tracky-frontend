import * as React from "react";
import styled from "styled-components";
import { inactive } from "core/colors";

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Description = styled.div`font-size: 14px;`;

const NoDescription = styled.div`color: ${inactive};`;

export default ({ title, description }) =>
  <div>
    <Title>
      {title}
    </Title>
    <Description>
      {description || <NoDescription>No description</NoDescription>}
    </Description>
  </div>;
