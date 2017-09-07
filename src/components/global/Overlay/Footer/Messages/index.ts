import * as actions from "./actions";

export type Message = {
  text: string;
  type?: "warning" | "success";
};

export { default } from "./Provider";
export { default as reducer } from "./reducer";
export { default as epic } from "./epic";
export { actions };
