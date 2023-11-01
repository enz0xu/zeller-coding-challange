import { createContext } from "react";
import { UserTypeContextProps } from "../types";

export const UserTypeContext = createContext<UserTypeContextProps | undefined>(
  undefined
);
