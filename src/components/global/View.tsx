import * as React from "react";
import styled from "styled-components";
import Overlay from "./Overlay";
import Loader from "./Loader";
import Modals from "./Modals";

export default ({ children, isLoading, projects }: any) =>
  isLoading
    ? <Loader />
    : <Wrap>
        <Overlay projects={projects}>
          {children}
        </Overlay>
        <Modals />
      </Wrap>;

const Wrap = styled.div`
  display: flex;
  height: 100%;
`;
