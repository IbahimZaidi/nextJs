import React from "react";

const BlogComp = ({ children }) => {
  return (
    <div className=" bg-blue-400 w-80vw m-auto flex flex-col justify-center items-center min-h-90vh  ">
      {children}
    </div>
  );
};

export default BlogComp;
