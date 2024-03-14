import Link from "next/link";
import React from "react";
import BlogCompChild from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/blog/BlogCompChild";
import styles from "./blog.module.css";
const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

const BlogComp = () => {
  return (
    <div
      className={`py-3 w-80vw grid grid-cols-12 gap-3 gap-x-3 justify-items-center  border  border-black ${styles.container}`}
    >
      {testArray.map((_, index) => {
        return <BlogCompChild key={index} element={index} />;
      })}
    </div>
  );
};

export default BlogComp;
