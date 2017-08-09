import { SET_VISIBLE } from "./actions";

const initialState = {
  visible: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.payload.len
      };
    default:
      return state;
  }
};
