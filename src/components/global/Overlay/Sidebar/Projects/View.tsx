import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Project } from "tracky-types";
import { border, primary } from "core/colors";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import Icon from "components/shared/kit/Icon";
import Title from "../Title";

export default ({ items, activeId, onAdd }: Props) =>
  <div>
    <Title>
      <TitleWrap>
        Projects<Circle onClick={() => onAdd()} />
      </TitleWrap>
    </Title>
    {items.map(({ name, id }, i: number) =>
      <Project key={i} to={replaceParams(paths.PROJECT, { id })}>
        {name}
      </Project>
    )}
  </div>;
export type Props = {
  items: Project[];
  onAdd: Function;
  activeId?: Project["id"];
};

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled(Icon).attrs({ name: "add_circle_outline" })`
  margin-left: auto;
  cursor: pointer;
  font-size: 12px;
`;

const Project = styled(NavLink)`
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #000;
  margin-right: -1px;
  &:hover {
    background-color: #f5f5f5;
    border-right: 1px solid ${border};
  }
  &.active {
    background-color: ${primary};
    color: #fff;
  }
`;
type ProjectProps = {
  isActive?: boolean;
};
