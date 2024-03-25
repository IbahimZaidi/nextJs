import React from "react";
import Links from "./links/links";
import { auth } from "@/src/lib/auth";
const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <nav className="bg-green-500 flex justify-between h-12 w-80vw m-auto ">
      <span className="bg-red-600 text-white p-2">Lama</span>
      <Links session={session} />
    </nav>
  );
};

export default Header;
