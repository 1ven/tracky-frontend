import * as React from "react";
import * as Table from "reactabular-table";
import styled from "styled-components";
import { border } from "core/colors";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledHead = styled.th`
  font-size: 12px;
  text-transform: uppercase;
  padding: 0 0 4px;
  text-align: left;
  border-bottom: 1px solid ${border};
`;

const StyledCell = styled.td`
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px solid #e9e9e9;
`;

const StyledRow = styled.tr`
  &:first-child td {
    padding-top: 11px;
  }
`;

export default ({ rows, columns, rowKey = "id" }) =>
  <Table.Provider
    columns={columns}
    components={{
      table: StyledTable,
      header: {
        cell: StyledHead
      },
      body: {
        cell: StyledCell,
        row: StyledRow
      }
    }}
  >
    <Table.Header />
    <Table.Body rows={rows} rowKey={rowKey} />
  </Table.Provider>;
