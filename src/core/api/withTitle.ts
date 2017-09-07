import { assocPath } from "ramda";

export default (title: string) => payload => ({
  ...payload,
  meta: {
    title
  }
});
