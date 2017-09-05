import param from "./param";

export default (key: string) => (state, props) => param(key)(props);
