import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({ header, children }) => {
  // const [show, setShow] = useState(false);

  // const handleToggleShow = () => {
  //   setShow((previous) => !previous);
  // };
  return (
    <div>
      <AccordionHeader>
        {header}
      </AccordionHeader>
      <AccordionContent>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
