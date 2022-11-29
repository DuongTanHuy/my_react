import React from "react";
import { useAccordion } from "./Accordion-context";

const AccordionContent = ({ children }) => {
  const { toggle } = useAccordion();

  return (
    <div
      className={`transition content border border-gray-500 rounded-lg flex items-center justify-center mt-2 p-3 ${
        toggle ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AccordionContent;
