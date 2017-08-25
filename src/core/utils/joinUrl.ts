export default (l: string, r: string) =>
  withoutTrailingSlash(l) + "/" + withoutLeadingSlash(r);

const withoutTrailingSlash = str => str.replace(/^(.+?)\/*?$/, "$1");
// TODO: cut multiple leading slashes
const withoutLeadingSlash = str => str.replace(/^\/?(.*?)$/, "$1");
