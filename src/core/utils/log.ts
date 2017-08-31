/**
 * Helps to debug expressions
 */
export default arg => {
  if (typeof arg !== "function") {
    console.log(arg);
    return arg;
  }
  return (...args) => {
    console.log(args);
    return arg(...args);
  };
};
