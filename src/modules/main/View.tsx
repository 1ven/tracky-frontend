import * as React from "react";
import { times } from "ramda";
import Input from "shared/components/Input";

export default ({
  items = [],
  isLoading,
  handleSubmit,
  visible,
  setVisible
}: Props) =>
  <div>
    <form onSubmit={handleSubmit}>
      <Input name="username" placeholder="Enter username" />
    </form>
    <select onChange={e => setVisible(+e.target.value)} value={visible}>
      {times(
        i =>
          <option value={i} key={i}>
            {i}
          </option>,
        10
      )}
    </select>
    <div>
      {isLoading
        ? "Loading..."
        : !items.length
          ? "No items"
          : items.filter((_, i) => i < visible).map((n, i) =>
              <div key={i}>
                {n}
              </div>
            )}
    </div>
  </div>;

export type Props = {
  items: string[];
  handleSubmit: any;
  isLoading: boolean;
  visible: number;
  setVisible: (value: number) => number;
};
