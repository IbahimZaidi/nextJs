import React from "react";

const BlogComp = ({ children }) => {
  return (
    <div className=" bg-blue-400 h-100vh flex flex-col justify-center items-center ">
      <h1> Hello from the Layout Blog page </h1>
      {children}
    </div>
  );
};

export default BlogComp;
