import { useState } from "react";
import ReactDOM from "react-dom";
import useHover from "../../hooks/useHover";

const ToolTip = ({ Children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});

  const handleOver = () => {
    setCoords(nodeRef.current.getBoundingClientRect());
    console.log(nodeRef.current.getBoundingClientRect());
  };

  return (
    <div className="relative inline-block m-[200px]">
      {hovered && <PortalText Children={Children} coords={coords}></PortalText>}
      <p
        className="text-[26px] font-semibold cursor-pointer"
        ref={nodeRef}
        onMouseOver={handleOver}
      >
        {text}
      </p>
    </div>
  );
};

function PortalText({ Children, coords }) {
  return ReactDOM.createPortal(
    <div
      className="absolute inline-block p-4 font-semibold text-white -translate-y-full bg-black rounded-lg -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2,
      }}
    >
      {Children}
    </div>,
    document.querySelector("body")
  );
}

export default ToolTip;
