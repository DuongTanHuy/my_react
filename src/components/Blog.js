import useHover from "../hooks/useHover";
import useLinkNewTag from "../hooks/useLinkNewTag";

const Blog = () => {
  // const {contentRef} = useLinkNewTag();
  const { contentRef: demoRef } = useLinkNewTag();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={demoRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        itaque sunt nam veritatis non error repellat, amet deserunt
        necessitatibus praesentium ut adipisci dolorem dignissimos ipsa aliquam
        dolore temporibus odio obcaecati!{" "}
        <a
          href="https://google.com"
          className={`underline ${hovered && "text-green-500"}`}
          ref={nodeRef}
        >
          Google
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic fuga
        impedit adipisci, animi, ipsum itaque et porro consectetur similique
        tempora optio odio nostrum! Asperiores cumque qui cupiditate nostrum
        dolore.{" "}
        <a href="https://google.com" className="underline">
          Google
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
