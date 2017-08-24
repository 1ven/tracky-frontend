export const SHOW_MODAL = "global/modals/showModal";
export const HIDE_MODAL = "global/modals/hideModal";

export const showModal = (name: string) => ({
  type: SHOW_MODAL,
  payload: {
    name
  }
});

export const hideModal = (name: string) => ({
  type: HIDE_MODAL,
  payload: {
    name
  }
});
