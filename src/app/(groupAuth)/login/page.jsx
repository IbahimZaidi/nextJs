import React from "react";

import Styles from "@/src/app/contact/contact.module.css";

import { signIn } from "@/src/lib/auth";

const LoginComp = async () => {
  const handleGitHubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <div className=" bg-gray-500 text-black h-100vh flex justify-center items-center w-80vw m-auto ">
      <form
        action={handleGitHubLogin}
        className="flex flex-col space-y-3 w-50% p-2"
        style={{ border: "3px solid red" }}
      >
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          className={Styles.theInput}
        />
        <input
          type="text"
          placeholder="Passowrd"
          name="Passowrd"
          className={Styles.theInput}
        />

        <button className=" bg-slate-400 h-12 w-100% m-auto "> Send </button>
      </form>
    </div>
  );
};

export default LoginComp;
