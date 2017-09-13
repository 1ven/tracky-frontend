import * as React from "react";
import styled from "styled-components";
import Select from "components/shared/kit/Select";
import Item from "../Item";

export default ({ status, isSaving, onChange }) =>
  <Item title="Status:" isLoading={isSaving}>
    <Select
      native
      onChange={(e: any) => onChange(e.target.value)}
      size="small"
      value={status}
      disabled={isSaving}
    >
      <option value={0}>To Do</option>
      <option value={1}>Done</option>
      <option value={2}>Won't do</option>
    </Select>
  </Item>;
