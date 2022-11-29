import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return {
    toggle,
    handleToggle,
  };
}
