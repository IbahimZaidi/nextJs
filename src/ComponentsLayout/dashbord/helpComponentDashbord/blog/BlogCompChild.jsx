import React from "react";
import Image from "next/image";
import Link from "next/link";
function BlogCompChild({ element }) {
  return (
    <div className=" h-450px p-1 col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3 w-100%   bg-green-500 relative border-4 border-black ">
      <Image
        src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={300}
        height={150}
        className="h-80% w-100%"
        alt="Error 404"
      />

      <span
        className=" absolute  bg-yellow-300 text-white w-100px "
        style={{
          top: "calc(40% + 50px) ", // 40% because the image have 80% from the height and 50px because the w-100px
          transform: "rotate(-90deg)",
          left: "100%",
          zIndex: "100",
          transformOrigin: "left bottom",
        }}
      >
        {" "}
        03-Mars-2000{" "}
      </span>
      <h1> Title </h1>
      <p> Desc </p>
      <div className="mt-2">
        <Link
          href={`/blog/${element}`}
          className=" theButtonClass  w-50% m-auto"
        >
          {" "}
          Read Me{" "}
        </Link>
      </div>
    </div>
  );
}

export default BlogCompChild;
