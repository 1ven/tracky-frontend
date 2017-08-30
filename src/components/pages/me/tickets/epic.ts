// import { compose, equals, prop } from "ramda";
// import { reset } from "redux-form";
// import { type } from "core/form";
// import { form } from "./meta";

// export default action$ =>
//   action$.filter(isSubmitAction).map(() => reset(form.createTicketForm));

// const isSubmitAction = compose(equals(type("submitSuccess")), prop("type"));

export default action$ => action$.filter(() => false);
