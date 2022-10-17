import React from "react";

const StopWatch = () => {
  const [count, setCount] = React.useState(0);

  const timeRef = React.useRef(null);

  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  React.useEffect(() => clearInterval(timeRef.current), []);

  return (
    <div>
      <h3>Time: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start!</button>
        <button className="ml-2" onClick={handleStop}>Stop!</button>
      </div>
    </div>
  );
};

export default StopWatch;
