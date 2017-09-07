import * as React from "react";
import styled from "styled-components";
import Button from "components/shared/kit/Button";
import Messages from "./Messages";

const CreateTicket = styled(Button)`
  margin-left: auto;
` as any;

export default ({ onCreateTicket }) =>
  <Wrap>
    <Messages />
    <CreateTicket onClick={onCreateTicket}>Create ticket</CreateTicket>
  </Wrap>;

const Wrap = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  bottom: 0;
  right: 0;
  padding: 0 14px 10px;
  width: 100%;
`;
