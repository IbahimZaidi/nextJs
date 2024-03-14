import React from "react";

import Links from "./links/links";
const Header = () => {
  return (
    <nav className="bg-green-500 flex justify-between h-12 w-80vw m-auto ">
      <span className="bg-red-600 text-white p-2">Lama</span>
      <Links />
    </nav>
  );
};

export default Header;
