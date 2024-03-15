import React from "react";
import Styles from "./about.module.css";
import Image from "next/image";

// import help components :
import RightContainer from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/about/rightContainer";

const AboutComp = () => {
  return (
    <div className=" min-h-90vh   w-80vw m-auto p-2 bg-green-400 flex flex-col lg:flex-row space-x-2 space-y-2 lg:space-y-0 ">
      <RightContainer />

      <div className=" bg-red-400 border border-black w-50% hidden  lg:flex items-center justify-center">
        <Image
          // src="/images/about.png"
          src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Error 404"
          className=" border border-black"
          width="445"
          height="450"
        />
      </div>
    </div>
  );
};

export default AboutComp;
