"use client";
import Styles from "@/app/contact/contact.module.css";
const LeftCompContact = () => {
  // console.log("Hello from the Left Component Contact ");
  return (
    <div className=" flex flex-col  flex-1 justify-start pt-16 px-3  space-y-6 bg-red-400 border border-black ">
      <form action="/admin" className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Username "
          name="name"
          className={Styles.theInput}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={Styles.theInput}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          className={Styles.theInput}
        />
        <textarea
          className=" text-black "
          name="textArea"
          placeholder="Describe here how do you feel "
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button className=" bg-slate-400 h-12 w-100% m-auto " type="submit">
          {" "}
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default LeftCompContact;
