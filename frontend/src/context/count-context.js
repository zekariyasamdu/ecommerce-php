import { createContext } from "react";

export const CountContext = createContext({
  state: 0,
  addNumber: () => {},
});
