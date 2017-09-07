import * as React from "react";
import styled from "styled-components";
import { inactive } from "core/colors";
import InlineEdit, { names } from "components/shared/kit/InlineEdit";
import Textarea from "components/shared/kit/Textarea";

const Description = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const NoDescription = styled.div`color: ${inactive};`;

export default ({ children, isSubmitting, initialValues, onSubmit }) =>
  <InlineEdit
    onSubmit={onSubmit}
    name={names.TICKET_DESCRIPTION}
    isSubmitting={isSubmitting}
    initialValues={initialValues}
    value={
      <Description>
        {children || <NoDescription>No description</NoDescription>}
      </Description>
    }
  >
    <Textarea
      name="description"
      placeholder="Description"
      disabled={isSubmitting}
    />
  </InlineEdit>;
