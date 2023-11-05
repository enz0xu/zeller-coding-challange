import { User } from "../../../types";

export const userTypesMock = ["ADMIN", "MANAGER"];

export const userListMock: User[] = [
  {
    email: "lynn@gmail.com",
    id: "f47813cf-0482-4326-afc9-12f53218ed06",
    name: "Lynn Warr",
    role: "MANAGER",
    __typename: "ZellerCustomer",
  },
  {
    email: "david@gmail.com",
    id: "73bae2af-4fa4-4023-8829-1034604e7590",
    name: "David Miller",
    role: "ADMIN",
    __typename: "ZellerCustomer",
  },
];
