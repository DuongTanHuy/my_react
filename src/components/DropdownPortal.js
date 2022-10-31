import React from "react";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { domRef: dropdown1, setShow, show } = useClickOutside(); // khong can theo thu tu
  const [coords, setCoords] = useState({});

  const handleClick = (event) => {
    setCoords(dropdown1.current.getBoundingClientRect());
    setShow(!show);
  };

  return (
    <div className="relative w-full max-w-[400px]" ref={dropdown1}>
      <div
        className="w-full p-5 border border-black rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute p-5 border border-black rounded-lg"
      style={{
        top: coords.top + coords.height + window.scrollY,
        left: coords.left,
        width: coords.width,
      }}
    >
      <div className="py-3 border-b cursor-pointer border-b-blue-400">
        JavaScrip
      </div>
      <div className="py-3 border-b cursor-pointer border-b-blue-400">
        ReactJS
      </div>
      <div className="py-3 cursor-pointer">VueJS</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
