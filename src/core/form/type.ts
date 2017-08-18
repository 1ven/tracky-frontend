export type FormActionType = "submitSuccess";

const map = {
  submitSuccess: "@@redux-form/SET_SUBMIT_SUCCEEDED"
};

export default (type: FormActionType) => map[type];
