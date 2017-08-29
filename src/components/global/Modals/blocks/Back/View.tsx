import * as React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${rgba("#000", 0.6)};
  z-index: 2;
`;

export default ({ closeModal, children }) =>
  <Wrap onClick={closeModal}>
    {children}
  </Wrap>;
