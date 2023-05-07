import { atom } from "recoil";

import data from "../../api/clients.json";
import { Clients } from "./types";

const defaultValue: Clients = data;

const clientState = atom({
  key: "clientState",
  default: defaultValue,
});

export { clientState };
