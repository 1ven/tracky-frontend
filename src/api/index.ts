import { prop } from "ramda";
import { createApi, createReducer } from "redux-api-helpers";
import repos from "./repos";

const api = createApi(
  {
    repos
  },
  {
    endpoint: "https://api.github.com"
  },
  {
    selector: prop("api"),
    context: "api"
  }
);

export default api;

export const reducer = createReducer(api);
