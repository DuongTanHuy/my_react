import React from "react";
import { CountProvider, useCount } from "./countContext";

// Muon goi bang the (component) trong function thi chu dau tien cua ham phai viet in hoa
const HandleCount = () => {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
};

function Counter() {
  // const [count, setCount] = useContext(CountContext);
  // const increment = () => setCount(count + 1);

  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      className="p-5 rounded-lg text-white font-semibold bg-purple-500 hover:shadow-lg"
      onClick={increment}
    >
      Increment count
    </button>
  );
}

const MainCountContext = () => {
  return (
    <>
      <CountProvider>
        <HandleCount></HandleCount>
        <Counter></Counter>
      </CountProvider>
    </>
  );
};

export default MainCountContext;
