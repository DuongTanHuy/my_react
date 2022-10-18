import { useEffect, useRef, useState } from "react";

export default function useClickOutside() {
  const [show, setShow] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    function handleClickOutDropdown(event) {
      if (domRef.current && !domRef.current.contains(event.target))
        setShow(false);
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => document.removeEventListener("click", handleClickOutDropdown);
  }, []);
  return {
    show,
    setShow,
    domRef,
  };
}
