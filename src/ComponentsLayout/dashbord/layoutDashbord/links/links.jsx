"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// icons
import { IoMdMenu } from "react-icons/io";
// get the footer css :
import styles from "./../footer.module.css";
const arrayLink = [
  { title: "Home", link: "/" },
  { title: "Blog", link: "/blog" },
  { title: "Admin", link: "/admin" },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about" },
];
const Links = () => {
  const thePath = usePathname();
  const isLogin = true;
  const isAdmin = true;
  // declare toggle state :

  const [valueToggle, setToggleButt] = useState(false);

  // function track the width of the page is the width > lg make the menu closed :
  const cheakWidth = () => {
    const theCurrentWidth = window.innerWidth;
    if (theCurrentWidth > 1024) {
      setToggleButt(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", cheakWidth);
  }, []);

  // end of cheak width event resize
  return (
    <div className=" flex justify-around items-center bg-yellow-500 w-70% p-1 relative">
      <div
        className={`lg:flex justify-around items-center bg-yellow-500 w-90% z-50 hidden ${
          valueToggle ? styles.isOpen : ""
        } `}
      >
        {arrayLink.map((elem, index, theArray) => {
          if (elem.title != "Admin") {
            return (
              <Link
                href={elem.link}
                className={`theLiStyle  ${
                  thePath == elem.link
                    ? styles.active
                    : valueToggle
                    ? styles.openLi
                    : ""
                } `}
                key={index}
                style={valueToggle ? { width: "25vw" } : {}}
              >
                {elem.title}
              </Link>
            );
          }
          if (elem.title == "Admin" && isAdmin && isLogin) {
            return (
              <Link
                href={elem.link}
                className={`theLiStyle  ${
                  thePath == elem.link
                    ? styles.active
                    : valueToggle
                    ? styles.openLi
                    : ""
                } `}
                key={index}
                style={valueToggle ? { width: "25vw" } : {}}
              >
                {elem.title}
              </Link>
            );
          }
        })}

        {isLogin ? (
          <Link href="/logout">
            <button className="theButtonClass">Logout</button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="theButtonClass">Login</button>
          </Link>
        )}
      </div>
      <button
        onClick={() => {
          setToggleButt((valueToggle) => {
            return !valueToggle;
          });
        }}
        className=" bg-black text-white ms-auto  h-8 w-8 flex justify-center items-center border border-white lg:hidden"
      >
        {" "}
        <IoMdMenu />{" "}
      </button>
    </div>
  );
};

export default Links;
