// ChildComponent.js
import React, { useEffect, useState } from "react";

import { fetchFD, fetchSU } from "@/src/app/blog/page";
const ChildComponent = async ({ elem }) => {
  return (
    <div className="flex flex-col space-y-3">
      <span> Author </span>
      <span> {elem.zipcode} </span>
    </div>
  );
};

export default ChildComponent;
