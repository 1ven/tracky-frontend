export const SHOW_MODAL = "global/modals/showModal";
export const HIDE_MODAL = "global/modals/hideModal";

export const showModal = (name: string, data?) => ({
  type: SHOW_MODAL,
  payload: {
    name,
    data
  }
});

export const hideModal = (name: string) => ({
  type: HIDE_MODAL,
  payload: {
    name
  }
});
