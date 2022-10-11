import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(function delay() {
      // stale state: setCount(count +1); -> trong khoang thoi gian 1s count chua duoc cong nen du click may lan thi no van lay count = 0
      // khac phuc:
      //   a = a +1;
      //   setCount(a);
      setCount((count) => (count += 1));
    }, 1000);
    

    // setTimeout(() => setCount((count) => count + 1), 1000);
  };

  return <div onClick={handleIncrement}>Increment {count}</div>;
};

export default Counter;
