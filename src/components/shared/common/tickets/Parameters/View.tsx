import * as React from "react";
import styled from "styled-components";
import { border } from "core/colors";
import Select from "components/shared/kit/Select";
import Icon from "components/shared/kit/Icon";
import Toggle from "components/shared/kit/Toggle";
import Box from "components/shared/kit/Box";
import Item from "./Item";

const Cog = styled(Icon).attrs({
  name: "settings"
})`
  font-size: 12px;
  cursor: pointer;
`;

const Dropdown = styled(Box)`
  width: 90px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 14px;
  z-index: 1;
`;

const Wrap = styled.div`position: relative;`;

export default ({ handleSubmit }) =>
  <Wrap>
    <Toggle
      link={<Cog />}
      body={
        <Dropdown>
          <form onSubmit={handleSubmit}>
            <Item title="Status:">
              <Select name="status" size="small">
                <option value={0}>To Do</option>
                <option value={1}>Done</option>
                <option value={2}>Won't do</option>
              </Select>
            </Item>
          </form>
        </Dropdown>
      }
    />
  </Wrap>;
