"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";

const IdBlogComp = () => {
  const { id } = useParams();

  return (
    <div className=" bg-white w-90% text-black flex justify-around items-center min-h-90vh gap-x-4 border-2 border-black m-2 ">
      <div className="w-30% bg-green-400 flex justify-center">
        <Image
          src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="445"
          height="650"
          // className="h-100%  "
          style={{ height: "650px" }}
          alt="Error 404"
        />
      </div>

      <div
        className="  bg-yellow-300 flex-1 text-black flex flex-col gap-5 pt-5 border-4 border-red-300 "
        style={{ height: "650px" }}
      >
        <h1> Title </h1>
        <div className="flex  gap-x-3 bg-pink-500 p-2">
          <Image
            src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width="50"
            height="50"
            className=" rounded-full"
            alt="Error 404"
          />
          <div className="flex flex-col ">
            <span> Auth </span>
            <span> Brahim Zaidi </span>
          </div>

          <div className="flex flex-col  ">
            <span> Published </span>
            <span> 03-03-2000 10:35:23 PM </span>
          </div>
        </div>
        <h2> Desc </h2>
      </div>
    </div>
  );
};

export default IdBlogComp;
