import * as React from "react";
import styled from "styled-components";
import Icon from "components/shared/kit/Icon";
import Toggle from "components/shared/kit/Toggle";
import ListBox from "components/shared/kit/ListBox";

const Cog = styled(Icon).attrs({
  name: "settings"
})`
  font-size: 12px;
  cursor: pointer;
`;

const Dropdown = styled(ListBox)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
`;

const Wrap = styled.div`
  margin-left: auto;
  position: relative;
`;

export default ({ onEditClick }) =>
  <Wrap>
    <Toggle
      link={<Cog />}
      body={
        <Dropdown
          items={[<div onClick={onEditClick}>Edit</div>, <div>Remove</div>]}
        />
      }
    />
  </Wrap>;
