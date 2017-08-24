import * as React from "react";
import styled from "styled-components";
import Button from "components/shared/kit/Button";

export default ({ onCreateTicket }) =>
  <Wrap>
    <Button onClick={onCreateTicket}>Create ticket</Button>
  </Wrap>;

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 10px 10px;
`;
