import { useState } from "react";
import { CountContext } from "../context/count-context";

export function CountProvider({ children }) {
  const [state, setState] = useState(0);
  function addNumber() {
    setState((i) => i + 1);
  }
  return (
    <CountContext.Provider value={{ state, addNumber }}>
      {children}
    </CountContext.Provider>
  );
}
