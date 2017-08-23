import * as React from "react";
import Input from "components/shared/Input";

export default ({ items = [], isLoading, handleSubmit, onRemove }: Props) =>
  <div>
    <form onSubmit={handleSubmit}>
      <Input name="title" placeholder="Enter ticket title" />
    </form>
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
    </div>
  </div>;

export type Props = {
  handleSubmit: any;
  items: any[];
  isLoading: boolean;
  onRemove: (id: number) => void;
};
