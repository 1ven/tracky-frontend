import * as React from "react";
import styled from "styled-components";

export default ({ projects }) =>
  <Wrap>
    {projects.map(({ name }, i) =>
      <Project key={i}>
        {name}
      </Project>
    )}
  </Wrap>;

const Wrap = styled.div`
  height: 100%;
  width: 200px;
  background-color: #000;
`;

const Project = styled.div`
  margin: 10px 0;
  color: #fff;
`;
