import { Selector } from "swifty";
import { Maybe } from "ramda-fantasy";

export default <S, P, R>(selector: Selector<S, P, R>) => (
  state: S,
  props?: P
) => {
  const result = selector(state, props);

  if (typeof result === "undefined") {
    return Maybe.Nothing();
  }

  return Maybe.Just(result);
};
