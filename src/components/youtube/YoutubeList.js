import React from "react";
import { youtubeData } from "./Data";
import YoutubeItem from "./YoutubeItem";
import "./YoutubeStyle.css";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {/* <h1>{props.children}</h1> */}
      {youtubeData.map((item) => (
        <div key={item.id}>
          <YoutubeItem
            className={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title || "This is a title"}
            author={item.author || "This is a author"}
          ></YoutubeItem>
        </div>
      ))}
    </div>
  );
};

export default YoutubeList;
