"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const page = () => {
  return (
    <div className="h-90vh bg-yellow-300 p-7 flex flex-col gap-y-8 ">
      {" "}
      Navig ation :
      <div>
        <Link href="/blog" className="theButtonClass" prefetch={false}>
          {" "}
          blog{" "}
        </Link>
      </div>{" "}
    </div>
  );
};

export default page;
