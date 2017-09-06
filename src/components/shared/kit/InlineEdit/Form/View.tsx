import * as React from "react";
import styled from "styled-components";
import { border } from "core/colors";
import Spinner from "components/shared/kit/Spinner";
import Button from "components/shared/kit/Button";

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 4px;
`;

const Btn = styled(Button).attrs({
  size: "small"
})`
  margin-right: 4px;
` as any;

export default ({ children, handleSubmit, isSubmitting, hide }: Props) =>
  <form onSubmit={handleSubmit}>
    {children}
    <Bottom>
      <Btn type="submit" inactive={isSubmitting}>
        Save
      </Btn>
      <Btn onClick={hide} color="red" inactive={isSubmitting}>
        Cancel
      </Btn>
      {isSubmitting && <Spinner size={10} thikness={1} />}
    </Bottom>
  </form>;

export type Props = {
  children: React.ReactNode;
  isSubmitting: boolean;
  handleSubmit: () => void;
  hide: () => void;
};
