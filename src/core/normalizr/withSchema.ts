import { normalize } from "normalizr";

export default schema => payload => {
  const { entities, result } = normalize(payload.body, schema);
  return {
    ...payload,
    entities,
    body: result
  };
};
