import React from "react";
import { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);

  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };

  return (
    <CountProvider
      values={{ handleIncrement, handleDecrement, count: getCount() }}
    >
      <div className="flex w-full max-w-[200px] mx-auto my-5 border-2 border-slate-300 rounded-lg overflow-hidden hover:bg-opacity-30">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
