import React from "react";

const BlogComp = ({ children }) => {
  return (
    <div className=" bg-blue-400 w-80vw m-auto flex flex-col justify-center items-center ">
      {children}
    </div>
  );
};

export default BlogComp;
