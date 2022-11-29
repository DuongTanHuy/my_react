import React, { useState } from "react";
import Counter from "./Counter";

const Main = () => {
  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return <Counter value={count} onChange={handleCountChange}></Counter>;
};

export default Main;
