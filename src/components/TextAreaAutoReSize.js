import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const TextAreaAutoReSize = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextHeight] = useState("auto");

  const handleChange = (event) => {
    setTextHeight("auto");
    setText(event.target.value);
    // setTextHeight(`${textAreaRef?.current?.scrollHeight}px`);
  };

  useEffect(() => {
    setTextHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="m-5">
      <textarea
        className="overflow-hidden p-5 w-full max-w-[400px] h-auto rounded-lg border border-gray-400 resize-none"
        placeholder="Please enter your content here..."
        value={text}
        ref={textAreaRef}
        style={{
          height: textAreaHeight,
        }}
        onChange={handleChange}
      ></textarea>

      <textarea
        className="block"
        name="have resize"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TextAreaAutoReSize;
