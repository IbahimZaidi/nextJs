import React from "react";

const Header = () => {
  return (
    <nav className="bg-green-500 flex justify-between h-12 w-80vw m-auto ">
      <span className="bg-red-600 text-white p-2">Lama</span>
      <ul className="flex justify-around bg-yellow-500 w-60% p-1">
        <li className="theLiStyle">HomePage</li>
        <li className="theLiStyle">About</li>
        <li className="theLiStyle">Contact</li>
        <li className="theLiStyle">Blog</li>
        <li className="theLiStyle">Admin</li>
        <li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
