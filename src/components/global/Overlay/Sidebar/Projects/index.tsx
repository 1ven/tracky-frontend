import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Project } from "tracky-types";
import { primary } from "core/colors";
import { replaceParams } from "core/utils";
import { paths } from "components/pages/projects";

export default ({ items, activeId }: Props) =>
  <div>
    {items.map(({ name, id }, i: number) =>
      <Project key={i} to={replaceParams(paths.item, { id })}>
        {name}
      </Project>
    )}
  </div>;
export type Props = {
  items: Project[];
  activeId?: Project["id"];
};

const Project = styled(NavLink)`
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #f5f5f5;
  }
  &.active {
    background-color: ${primary};
    color: #fff;
  }
`;
type ProjectProps = {
  isActive?: boolean;
};
