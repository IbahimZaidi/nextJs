import React from "react";
import Image from "next/image";
import Link from "next/link";
const RightContainerHome = () => {
  return (
    <div className=" flex flex-col pb-5  justify-start pt-16 gap-6 bg-red-400 border border-black flex-1 ">
      <h1 className="text-6xl ">
        {" "}
        We Create digital ideas that are bigger , bolder , braver and better .{" "}
      </h1>
      <h1>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis
        magnam quis nihil tempore animi, laudantium repellendus maxime dolor ut
        earum placeat illum rem id est, suscipit, deleniti perspiciatis dolore.
      </h1>

      <div className="flex justify-start space-x-3 bg-yellow-400  p-2 w-100%  ">
        <Link
          href="/about"
          className=" flex justify-center items-center hover:bg-blue-700 w-40% sm:w-30% lg:w-40% xl:w-30% 2xl:w-20% h-12 font-bold py-2 px-4 rounded bg-green-300 text-black "
        >
          {" "}
          Learn more{" "}
        </Link>
        <Link
          href="/contact"
          className=" flex justify-center items-center hover:bg-blue-700 w-40% sm:w-30% lg:w-40% xl:w-30% 2xl:w-20% h-12 font-bold py-2 px-4 rounded bg-white text-black "
        >
          {" "}
          Contact{" "}
        </Link>
      </div>

      <div>
        <Image
          src="/images/brands.png"
          width={500}
          height={100}
          className="m-auto"
        />
      </div>
    </div>
  );
};

export default RightContainerHome;
