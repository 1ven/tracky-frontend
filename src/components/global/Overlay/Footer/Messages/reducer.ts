import { CREATE, REMOVE } from "./actions";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((_, i) => i !== action.payload.index);
    default:
      return state;
  }
};

export const getItems = state => state.global.overlay.footer.messages;
