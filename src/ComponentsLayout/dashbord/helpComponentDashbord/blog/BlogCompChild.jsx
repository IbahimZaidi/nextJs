import React from "react";
import Image from "next/image";
import Link from "next/link";
function BlogCompChild({ id, title, body, userId }) {
  return (
    <div
      className=" p-1   w-90% lg:w-49% xl:w-30% 2xl:w-24% flex flex-col gap-y-2 pt-4      bg-green-500 relative border-4 border-black "
      style={{ height: "490px" }}
    >
      <Image
        src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={300}
        height={150}
        className="h-50% w-100%"
        alt="Error 404"
      />

      <span
        className=" absolute  bg-yellow-300 text-white w-100px "
        style={{
          top: "calc(25% + 50px) ", // 40% because the image have 80% from the height and 50px because the w-100px
          transform: "rotate(-90deg)",
          left: "100%",
          zIndex: "49",
          transformOrigin: "left bottom",
        }}
      >
        {" "}
        03-Mars-2000{" "}
      </span>
      <h1 className="text-white text-xl"> {title} </h1>
      <p className="text-sm"> {body} </p>
      <div className="mt-2 flex items-end w-100%  h-100px  ">
        <Link
          href={`/blog/${id}`}
          className=" theButtonClass  w-28 flex justify-center  h-10 "
        >
          {" "}
          Read Me{" "}
        </Link>
      </div>
    </div>
  );
}

export default BlogCompChild;
