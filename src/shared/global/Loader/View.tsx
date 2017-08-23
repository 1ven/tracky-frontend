import * as React from "react";
import styled from "styled-components";

export default styled.div.attrs({
  children: "Loading..."
})`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;
