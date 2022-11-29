import React from "react";
import { useCount } from "./count-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      className="increment p-5 flex items-center justify-center bg-slate-300 text-lg cursor-pointer hover:opacity-60"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
