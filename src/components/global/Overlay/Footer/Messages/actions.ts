import { Message } from "./";

export const REMOVE = "ui/global/overlay/footer/messages/remove";
export const CREATE = "ui/global/overlay/footer/messages/create";

export const remove = (index: number) => ({
  type: REMOVE,
  payload: {
    index
  }
});

export const create = (m: Message) => ({
  type: CREATE,
  payload: m
});
