import { useEffect, useRef, useState } from "react";

export default function useClickOutside(status = false, dom) {
  const [show, setShow] = useState(status);
  const domRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(event) {
      console.log(event.target);
      console.log(domRef.current);
      console.log(domRef.current.contains(event.target));
      if (
        domRef.current &&
        !domRef.current.contains(event.target) &&
        !event.target.matches(dom)
      )
        setShow(status);
      else setShow(!status); // de khong can su dung onClick cho nut button ben MenuSideBar
    }
    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide);
  }, [dom, status]);
  return {
    show,
    domRef,
    setShow
  };
}
