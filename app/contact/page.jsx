import React from "react";
import Image from "next/image";
import LeftCompContact from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/contact/LeftCompContact";
const ContactComp = () => {
  console.log("Hello world !!!!!!! ");
  return (
    <div className=" min-h-90vh  w-80vw m-auto p-2 bg-green-400 flex flex-col lg:flex-row  gap-x-2 gap-8  ">
      <div className=" bg-red-400 border border-black flex-1  flex items-center justify-center">
        <Image
          // src="/images/about.png"
          src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Error 404"
          className=" border border-black"
          width="445"
          height="450"
        />
      </div>
      <LeftCompContact />
    </div>
  );
};

export default ContactComp;
