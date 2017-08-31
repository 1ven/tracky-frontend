import { log } from "./utils";

if (process.env.NODE_ENV === "development") {
  (window as any).__log = log;
}
