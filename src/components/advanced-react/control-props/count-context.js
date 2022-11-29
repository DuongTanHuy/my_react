import { useContext } from "react";
import { createContext } from "react";

const CountContext = createContext(undefined);

function CountProvider({ values, ...props }) {
  return (
    <CountContext.Provider value={values} {...props}></CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be useed within CountProvider");
  return context;
}

export { CountProvider, useCount };
