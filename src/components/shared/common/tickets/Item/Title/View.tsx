import * as React from "react";
import styled from "styled-components";
import InlineEdit, { names } from "components/shared/kit/InlineEdit";
import Input from "components/shared/kit/Input";

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
`;

export default ({ children, isSubmitting, initialValues, onSubmit }) =>
  <InlineEdit
    onSubmit={onSubmit}
    name={names.TICKET_TITLE}
    isSubmitting={isSubmitting}
    initialValues={initialValues}
    value={
      <Title>
        {children}
      </Title>
    }
  >
    <Input type="text" name="title" size="small" disabled={isSubmitting} />
  </InlineEdit>;
