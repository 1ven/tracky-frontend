import * as React from "react";
import Input from "components/shared/kit/Input";

export default ({ items = [], isLoading }: Props) =>
  <div>
    {isLoading
      ? "Loading..."
      : !items.length
        ? "No items"
        : <table>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ title }, i) =>
                <tr key={i}>
                  <td>
                    {title}
                  </td>
                </tr>
              )}
            </tbody>
          </table>}
  </div>;

export type Props = {
  items: any[];
  isLoading: boolean;
};
