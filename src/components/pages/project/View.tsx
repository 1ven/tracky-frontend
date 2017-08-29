import * as React from "react";
import styled from "styled-components";
import Input from "components/shared/kit/Input";
import Table from "components/shared/kit/Table";
import More from "./More";

export default ({ items = [], isLoading }: Props) =>
  <div>
    {isLoading
      ? "Loading..."
      : !items.length
        ? "No items"
        : <Table
            columns={[
              {
                property: "title",
                header: {
                  label: "Title"
                }
              },
              {
                property: "id",
                props: {
                  style: {
                    textAlign: "right"
                  }
                },
                cell: {
                  formatters: [id => <More id={id} />]
                }
              }
            ]}
            rows={items}
          />}
  </div>;

export type Props = {
  items: any[];
  isLoading: boolean;
};
