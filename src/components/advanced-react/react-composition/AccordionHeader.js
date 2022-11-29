import React from "react";
import { useAccordion } from "./Accordion-context";

const AccordionHeader = ({ children }) => {
  const { toggle, handleToggle } = useAccordion();

  return (
    <div
      className="header cursor-pointer transition-all p-4 border border-gray-500 rounded-lg flex items-center justify-center"
      onClick={handleToggle}
    >
      {children}
      {toggle ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
