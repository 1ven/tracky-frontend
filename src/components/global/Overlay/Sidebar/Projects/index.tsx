import * as React from "react";
import styled from "styled-components";
import { primary } from "core/colors";
import { Project } from "tracky-types";

export default ({ items, activeId }: Props) =>
  <div>
    {items.map(({ name, id }, i: number) =>
      // Use react router's Link for activivity instead
      <Project key={i} isActive={id === activeId}>
        {name}
      </Project>
    )}
  </div>;
export type Props = {
  items: Project[];
  activeId?: Project["id"];
};

const Project = styled.div`
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  ${({ isActive }: ProjectProps) =>
    isActive &&
    `
    background-color: ${primary};
    color: #fff;
  `};
`;
type ProjectProps = {
  isActive?: boolean;
};
