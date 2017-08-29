import * as React from "react";
import styled from "styled-components";
import { border } from "core/colors";
import Button from "components/shared/kit/Button";
import Back from "../../blocks/Back";
import Box from "../../blocks/Box";

const types = {
  warning: "red",
  success: "blue"
};

const Footer = styled.div`
  border-top: 1px solid ${border};
  padding-top: 10px;
  margin: 0 -14px;
  padding: 14px 14px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Cancel = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  font-size: 14px;
  margin-bottom: 14px;
`;

export default ({
  type,
  title,
  text,
  onConfirm,
  onCancel,
  isConfirming,
  name,
  confirmTitle = "Confirm"
}: any) =>
  <Back>
    <Box title={title} name={name}>
      <Text>
        {text}
      </Text>
      <Footer>
        <Cancel onClick={onCancel}>Cancel</Cancel>
        <Button
          isLoading={isConfirming}
          onClick={onConfirm}
          color={types[type]}
        >
          {confirmTitle}
        </Button>
      </Footer>
    </Box>
  </Back>;
