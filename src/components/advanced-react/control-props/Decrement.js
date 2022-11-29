import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      className="decrement p-5 flex items-center justify-center bg-slate-300 text-lg cursor-pointer hover:opacity-60"
      onClick={handleDecrement}
    >
      -
    </button>
  );
};

export default Decrement;
