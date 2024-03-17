"use client";

import React, { useState } from "react";
import BlogCompChild from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/blog/BlogCompChild";
import styles from "./blog.module.css";
import { useEffect } from "react";
import error from "../error";
const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

export const fetchFD = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      { cache: "no-store" } // with secondes
    );

    if (!response.ok) {
      throw error({
        message: "failed 404",
        textSataus: response.textSataus,
        status: response.status,
      });
    }
    const newData = response.json();

    return newData;
  } catch (error) {
    console.log("the Error message is : ", error.message);
    return null;
  }
};

export const fetchSD = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { next: { revalidate: 3600 } } // with secondes
    );

    if (!response.ok) {
      throw error({
        message: "failed 404",
        textSataus: response.textSataus,
        status: response.status,
      });
    }
    const newData = response.json();

    return newData;
  } catch (error) {
    console.log("the Error message is : ", error.message);
    return null;
  }
};

export const fetchSU = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { next: { revalidate: 3600 } } // with secondes
    );

    if (!response.ok) {
      throw error({
        message: "failed 404",
        textSataus: response.textSataus,
        status: response.status,
      });
    }
    const newData = response.json();

    return newData;
  } catch (error) {
    console.log("the Error message is : ", error.message);
    return null;
  }
};

const BlogComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFD().then((resolve) => setData(resolve));
  }, []);
  console.log("#######################");
  console.log(data);
  console.log("#######################");

  return (
    <div
      className={`py-3 w-80vw flex flex-wrap justify-center gap-3 gap-x-3  border  border-black ${styles.container}`}
    >
      {data.length > 0 &&
        data.map((elem) => {
          return <BlogCompChild {...elem} key={elem.id} />;
        })}
    </div>
  );
};

export default BlogComp;
