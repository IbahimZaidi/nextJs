"use client";

const getAllData = async (id) => {
  const allData = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("$$$$$$$$$$$$$$$$$$$$$$$$44");
  console.log(id);
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$44");

  const res = await fetch("http://localhost:3000/api/handler", allData);
  const response = await res.json();
  return response;
};

export default getAllData;
