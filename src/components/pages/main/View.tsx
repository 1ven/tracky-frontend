import * as React from "react";
import Input from "components/shared/kit/Input";

export default ({ items = [], isLoading, onRemove }: Props) =>
  <div>
    {isLoading
      ? "Loading..."
      : !items.length
        ? "No items"
        : items.map((item, i) =>
            <div key={i}>
              {item.title}
              &nbsp;
              <span onClick={() => onRemove(item.id)}>x</span>
            </div>
          )}
  </div>;

export type Props = {
  items: any[];
  isLoading: boolean;
  onRemove: (id: number) => void;
};
