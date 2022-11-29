import { useContext } from "react";
import { createContext } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();

function AccordionProvider(props) {
  const { toggle, handleToggle } = useToggle();
  const values = { toggle, handleToggle };

  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
}

function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined")
    throw new Error("useAccordion must be use within a AccordionProvider");
  return context;
}

export {useAccordion, AccordionProvider}