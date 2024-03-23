import React from "react";
import Image from "next/image";
import { createPost } from "@/src/lib/insertData";
import Styles from "@/src/app/contact/contact.module.css";
import { deletePost } from "@/src/lib/deletePost";

const AdminComp = () => {
  console.log("hello from the Parent");
  return (
    <div className="min-h-90vh  w-80vw p-2 bg-green-400 flex  gap-x-2 gap-8 m-auto  ">
      <div className=" bg-red-400 border flex-1 ">
        <Image
          // src="/images/about.png"
          src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Error 404"
          className=" border border-black"
          width="445"
          height="450"
        />
      </div>

      <div className=" flex flex-col  flex-1 justify-start pt-16 px-3  space-y-6 bg-red-400 border border-black ">
        <form action={createPost} className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="user Id  "
            name="userId"
            className={Styles.theInput}
          />
          <input
            type="text"
            placeholder="title"
            name="title"
            className={Styles.theInput}
          />
          <input
            type="text"
            placeholder="body"
            name="body"
            className={Styles.theInput}
          />

          <button className=" bg-slate-400 h-12 w-100% m-auto " type="submit">
            {" "}
            Send{" "}
          </button>
        </form>
        <form action={deletePost} className="border-4 border-black mt-4">
          <input
            type="number"
            placeholder="id"
            name="id"
            className={Styles.theInput}
          />
          <button className=" bg-slate-400 h-12 w-100% m-auto " type="submit">
            {" "}
            Delete{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminComp;
