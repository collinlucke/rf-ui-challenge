import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type User = {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType>({
  user: { id: 0 },
  setUser: () => {},
});
