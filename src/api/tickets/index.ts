import readAll from "./readAll";
import create from "./create";
import read from "./read";
import update from "./update";
import remove from "./remove";

export type Ticket = {
  id: number;
  title: string;
};

export default {
  readAll,
  create,
  read,
  update,
  remove
};
