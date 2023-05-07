import { atom } from "recoil";

import clients from "../../api/clients.json";
import { Client } from "./types";

const defaultValue: Client[] = clients.data;

const clientState = atom({
  key: "clientState",
  default: defaultValue,
});

const getFilteredClients = (
  clients: Client[],
  searchString: string
): Client[] => {
  return clients.filter(
    (client) =>
      client.firstName.includes(searchString) ||
      client.lastName.includes(searchString)
  );
};

export { clientState, getFilteredClients };
