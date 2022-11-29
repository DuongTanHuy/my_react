import React from "react";
import Switch from "../switch/Switch";
import Accordion from "./react-composition/Accordion";
import { AccordionProvider } from "./react-composition/Accordion-context";
import Editable from "./react-composition/Editable";

function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  function getToggle({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      //   on,
      ...rest,
    };
  }
  return {
    on,
    toggle,
    toggleProps: {
      onClick: toggle,
      //   on,
    },
    getToggle,
  };
}

const Main = () => {
  const { on, getToggle } = useToggle();

  return (
    <AccordionProvider>
      <Accordion header="Accordion header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        repudiandae nesciunt commodi et, atque a quae molestiae soluta ex,
        magnam ea pariatur officiis provident ipsum autem. Voluptate odit
        facilis ipsum!
      </Accordion>
      <Editable></Editable>
      <Switch {...getToggle({ on })} />
      <hr />
      <button
        aria-label="custom-button"
        {...getToggle({ onClick: () => console.log(on) })}
      >
        {on ? "on" : "off"}
      </button>
    </AccordionProvider>
  );
};

export default Main;
