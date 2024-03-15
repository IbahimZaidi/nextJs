import React from "react";

import Styles from "@/app/about/about.module.css";
const RightContainer = () => {
  return (
    <div className=" flex flex-col  justify-start pt-16  space-y-6 bg-red-400 border border-black  w-100% lg:w-50%  ">
      <h1 className="text-xl text-blue-600  ">About Agency </h1>

      <h1 className="text-5xl ">
        {" "}
        We Create digital ideas that are bigger , bolder , braver and better .{" "}
      </h1>

      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        provident laudantium iure ab sapiente a eaque voluptates dolores dicta
        quod? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        provident laudantium iure ab sapiente a eaque voluptates dolores dicta
        quod?
      </h2>

      <div className="flex justify-between  flex-wrap  bg-yellow-400  p-2 gap-x-2 gap-y-4 ">
        <div className={`flex flex-col  space-y-2 p-3 ${Styles.spanContainer}`}>
          <span className={Styles.span}> 10 K+ </span>
          <span className={Styles.span}>year of exerprience </span>
        </div>
        <div className={`flex flex-col space-y-2 p-3 ${Styles.spanContainer}`}>
          <span className={Styles.span}> 234 K+ </span>
          <span className={Styles.span}> Peaple reached </span>
        </div>
        <div className={`flex flex-col space-y-2 p-3 ${Styles.spanContainer}`}>
          <span className={Styles.span}> 5 K+ </span>
          <span className={Styles.span}> Services and Plungins </span>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
