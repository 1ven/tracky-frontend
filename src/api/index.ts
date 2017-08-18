import { prop } from "ramda";
import { createApi, createReducer } from "redux-api-helpers";
import tickets from "./tickets";

const api = createApi(
  {
    tickets
  },
  {
    endpoint: "http://localhost:3000"
  },
  {
    selector: prop("api"),
    context: "api"
  }
);

export default api;

export const reducer = createReducer(api);
