import React from "react";
import { useState } from "react";
import ModalBase from "./ModalBase";

const TooltipAdvanced = ({ children, title }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  const handleOnMouseEnter = (event) => {
    event.preventDefault();
    console.log(1);
    setCoords(event.target.getBoundingClientRect());
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const handleMouseLeave = (event) => {
    event.preventDefault();
    console.log(2);
    // setVisible(false);
  };

  return (
    <div>
      <p
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="font-semibold text-xl cursor-pointer"
      >
        {title}
      </p>
      <ModalBase
        overlay={false}
        bodyStyle={{ width: "200px" }}
        visible={visible}
      >
        <div
          className="p-4 font-semibold text-white bg-black rounded-lg"
          style={{
            top: coords.top - coords.height / 2,
            left: coords.left + coords.width / 2,
          }}
        >
          {children}
        </div>
      </ModalBase>
    </div>
  );
};

export default TooltipAdvanced;
