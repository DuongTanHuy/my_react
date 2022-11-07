import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigation = useNavigate();

  return (
    <div>
      This is a BlogPage Detail
      <button
        onClick={() => navigation("/blog")}
        className="p-5 rounded-lg bg-blue-500 mx-3 text-white"
      >
        Navigate to BlogPage
      </button>
    </div>
  );
};

export default BlogPageDetail;
