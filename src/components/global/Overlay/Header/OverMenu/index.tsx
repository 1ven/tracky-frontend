import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import { primary } from "core/colors";
import Search from "./Search";

const Wrap = styled.div`
  width: 300px;
  height: calc(100% - 44px);
  top: 44px;
  left: 0;
  z-index: 1;
  position: absolute;
  background-color: #242424;
  padding: 10px 14px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 12px;
`;

const Item = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Project = styled(NavLink)`
  color: #fff;
  font-size: 14px;
  padding: 8px 14px;
  margin: 0 -14px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  &:hover {
    background-color: #1b1b1b;
  }
  &.active {
    background-color: ${primary};
  }
`;

export default ({ projects, onProjectClick }) =>
  <Wrap>
    <Item>
      <Title>Projects</Title>
      <Search />
      <div>
        {projects.map((p, i) =>
          <Project
            key={i}
            onClick={onProjectClick}
            to={replaceParams(paths.PROJECT, { projectId: p.id })}
          >
            {p.name}
          </Project>
        )}
      </div>
    </Item>
  </Wrap>;
