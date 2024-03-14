import Link from "next/link";
import React from "react";

import styles from "./blog.module.css";

const BlogComp = () => {
  return (
    <div
      className={`h-100vh w-80vw flex justify-center items-center border  border-black ${styles.container}`}
    >
      <h4> Hello from the Blog page </h4>
      <Link
        href="blog/10"
        className=" bg-blue-400 flex justify-center items-center w-20 h-8  "
      >
        {" "}
        to Id{" "}
      </Link>
    </div>
  );
};

export default BlogComp;
