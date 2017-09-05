import { denormalize } from "normalizr";

export default (selector, schema) => (state, props) => {
  const result = selector(state, props);

  if (!result) return;

  return denormalize(result, schema, state.entities);
};
