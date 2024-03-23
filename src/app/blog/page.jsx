"use client";

import React, { useState } from "react";
import BlogCompChild from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/blog/BlogCompChild";
import styles from "./blog.module.css";
import { useEffect } from "react";

export const getDataApiRoute = async () => {
  const response = await fetch("http://localhost:3000/api/blog");

  const result = await response.json();

  return result.posts;
};

const BlogComp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDataApiRoute().then((resolve) => setPosts(resolve));
  }, []);

  console.log("#######################");
  console.log(posts);
  console.log("#######################");

  return (
    <div
      className={`py-3 w-80vw flex flex-wrap justify-center gap-3 gap-x-3  border  border-black ${styles.container}`}
    >
      {posts.length > 0 &&
        posts.map((elem) => {
          return <BlogCompChild {...elem} key={elem.id} />;
        })}
    </div>
  );
};

export default BlogComp;
