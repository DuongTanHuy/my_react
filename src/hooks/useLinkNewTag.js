import { useEffect, useRef } from "react";

export default function useLinkNewTag() {
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");
      links.length > 0 && links.forEach((link) => (link.target = "_blank"));
    }
  }, []);
  return { contentRef };
}
