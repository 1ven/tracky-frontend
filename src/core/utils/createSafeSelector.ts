import { Maybe } from "ramda-fantasy";

export default selector => (state, props?) => {
  const result = selector(state, props);

  if (typeof result === "undefined") {
    return Maybe.Nothing();
  }

  return Maybe.Just(result);
};
