import { Maybe } from "ramda-fantasy";

/**
 * Wraps selector, which could return undefined into a Maybe type
 * 
 * @param selector Redux selector
 * @returns New selector
 */
export const safe = selector => (state, props?) =>
  Maybe.toMaybe(selector(state, props));
