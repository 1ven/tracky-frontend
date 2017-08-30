import * as React from "react";
import styled from "styled-components";
import Icon from "components/shared/kit/Icon";

const Input = styled.input`
  background-color: transparent;
  font-size: 14px;
  color: #fff;
  border: 0;
  width: 100%;
  appearance: none;
  outline: 0;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid #fff;
  padding-bottom: 6px;
`;

const SearchIcon = styled(Icon).attrs({
  name: "search"
})`
  color: #fff;
  font-size: 16px;
  margin-right: 3px;
`;

export default () =>
  <Wrap>
    <SearchIcon />
    <Input placeholder="Search project..." />
  </Wrap>;
