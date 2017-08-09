export const SET_VISIBLE = "modules/user/type";

export const setVisible = (len: number) => ({
  type: SET_VISIBLE,
  payload: {
    len
  }
});
