import * as React from "react";
import Box from "components/shared/modal/Box";
import Back from "components/shared/modal/Back";
import Form from "../Form";
import { createTicketModal } from "./meta";

export default () =>
  <Back>
    <Box title="Create ticket" name={createTicketModal}>
      <Form />
    </Box>
  </Back>;
