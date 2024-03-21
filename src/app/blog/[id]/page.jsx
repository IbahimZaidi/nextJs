"use client";

import React, { Suspense, lazy } from "react";
import Image from "next/image";
import { fetchSD } from "../page";

import { useState, useEffect } from "react";
import getDAtaId from "@/src/helper/functions/getDataId";
import ChildComponent from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/blog/ChildComponent";
const IdBlogComp = ({ params }) => {
  // const [data, setData] = useState({});
  const [data, setData] = useState({});
  const [elemUser, setElemUser] = useState({});

  useEffect(() => {
    // fetchSD(params.id).then((resolve) => setData(resolve));
    getDAtaId(params.id).then((resolve) => {
      setData(resolve.postOfId[0]);
    });
  }, []);
  useEffect(() => {
    data?.userId
      ? getDAtaId(params.id, data?.userId).then((resolve) => {
          setElemUser(resolve?.usId[0]);
        })
      : "";
  }, [data]);

  console.log("**********************");
  console.log(data);
  console.log(elemUser);
  console.log("**********************");

  return (
    <div className=" bg-white w-80vw m-auto p-2 text-black flex flex-col lg:flex-row    justify-around  gap-5   gap-x-4 border-2 border-black  ">
      <div className=" bg-red-400 border border-black  w-100%  lg:w-40% xl:30%  flex  items-center justify-center">
        <Image
          // src="/images/about.png"
          src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Error 404"
          className=" border border-black  "
          width="445"
          height="450"
        />
      </div>

      <div
        className="  bg-yellow-300  pt-5 border-4 border-red-300 text-black w-100%  flex flex-col  lg:flex-1 gap-5   "
        // style={{ height: "650px" }}
      >
        <h1> {data && data.title} </h1>
        <div className="flex  gap-x-3 bg-pink-500 p-2">
          <Image
            src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width="50"
            height="50"
            className=" rounded-full"
            alt="Error 404"
          />
          {data.userId && (
            <Suspense
              fallback={
                <h3 className="bg-black text-white"> Loading ........ </h3>
              }
            >
              <ChildComponent elem={elemUser} />
            </Suspense>
          )}

          <div className="flex flex-col  ">
            <span> Published </span>
            <span> 03-03-2000 10:35:23 PM </span>
          </div>
        </div>
        <h2> {data && data.body} </h2>
      </div>
    </div>
  );
};

export default IdBlogComp;
