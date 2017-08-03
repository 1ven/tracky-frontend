import { State as S } from "swifty-api";
import { createEntry } from "core/utils";

export default createEntry({
  url: "/users/:name/repos",
  method: "GET"
  // mapModel: compose(withLocalStorage, withDevTools)
});

export type Repo = {
  id: number;
  full_name: string;
  name: string;
};

export type Response = Repo[];
export type State = S<Response>;
