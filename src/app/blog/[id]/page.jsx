"use client";

import React, { Suspense, lazy } from "react";
import Image from "next/image";
import { resolve } from "styled-jsx/css";
// import { fetchSD } from "../page";

import { useState, useEffect } from "react";
// import getDAtaId from "@/src/helper/functions/getDataId";
import ChildComponent from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/blog/ChildComponent";
import { DELETE } from "../../api/blog/[id]/route";

export const getThePost = async (id) => {
  const url = `http://localhost:3000/api/blog/${id}`;

  const response = await fetch(url);

  const result = await response.json();

  return result;
};

export const getTheUser = async (id, userId) => {
  const url = `http://localhost:3000/api/blog/${id}?userId=${userId}`;

  const response = await fetch(url);

  const result = await response.json();

  return result;
};

// const deletePost = async (id) => {
//   const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
//     method: "DELETE",
//   });
// };

// const createNewPost = async (id, theSearch) => {
//   const { userId, title, body } = theSearch;
//   console.log(userId, title, body);
//   const response = await fetch(
//     `http://localhost:3000/api/blog/${id}?userId=${userId}&title=${title}&body=${body}`,
//     {
//       method: "POST",
//     }
//   );
// };
// const IdBlogComp component , the main component :
const IdBlogComp = ({ params, searchParams }) => {
  const [data, setData] = useState({});
  const [elemUser, setElemUser] = useState({});

  // get the Post
  useEffect(() => {
    getThePost(params.id).then((resolve) => setData(resolve[0]));
  }, []);

  // get the User
  useEffect(() => {
    data?.userId
      ? getTheUser(params.id, data.userId).then((resolve) =>
          setElemUser(resolve[0])
        )
      : "";
  }, [data]);

  console.log("**********************");
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
        {/* <button
          onClick={() => {
            deletePost(83);
            console.log("delete this button ");
          }}
          className=" bg-red-500 p-5 w-1/3 m-auto"
        >
          {" "}
          Delete the element 86{" "}
        </button> */}

        {/* <button
          onClick={() => {
            createNewPost(params.id, searchParams);
            console.log("create this button ");
          }}
          className=" bg-green-500 p-5 w-1/3 m-auto"
        >
          {" "}
          Create New Post
        </button> */}
      </div>
    </div>
  );
};

export default IdBlogComp;
