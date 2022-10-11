import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className={`youtube-item ${props.className}`}>
        <div className="youtube-image" /*style={{height: '250px'}}*/>
          <img src={props.image} alt="" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" className="youtube-avatar" />

          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title || "This is a title"}
            </h3>
            <h4 className="youtube-author">
              {props.author || "This is a author"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
