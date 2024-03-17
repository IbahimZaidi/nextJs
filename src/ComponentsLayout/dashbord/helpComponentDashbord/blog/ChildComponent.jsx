// ChildComponent.js
import React, { useEffect, useState } from "react";

import { fetchSU } from "@/app/blog/page";
const ChildComponent = async ({ userId }) => {
  const user = await fetchSU(userId); // waiting data

  return (
    <div className="flex flex-col space-y-3">
      <span> Author </span>
      <span> {user.name} </span>
    </div>
  );
};

export default ChildComponent;
