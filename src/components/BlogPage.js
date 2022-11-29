import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [search, setSearch] = useSearchParams();
  console.log(search.get("search"));
  useEffect(() => setSearch({ search: "Huy" }), [setSearch]);
  return <div>This is a BlogPage</div>;
};

export default BlogPage;
