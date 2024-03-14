import React from "react";
import Image from "next/image";
import Link from "next/link";
function BlogCompChild({ element }) {
  return (
    <div className=" h-450px p-1 col-span-6 lg:col-span-2 xl:col-span-2 w-90%   bg-green-500 ">
      <Image
        src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={300}
        height={150}
        className="h-80% w-100%"
        alt="Error 404"
      />
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
