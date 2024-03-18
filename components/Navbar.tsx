// import React from "react";
"use client";
import { CiUser } from "react-icons/ci";
import { PiArticleThin } from "react-icons/pi";
import { IoIosCode } from "react-icons/io";
import { PiPackageThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { useRef, useState } from "react";
import { MdClose } from "react-icons/md";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const iconStyle = {
    color: "#bbbbbb",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };
  const navLinks = [
    {
      icon: <CiUser style={iconStyle} className="nav-links" />,
      name: "about",
      link: "/about",
    },
    {
      icon: <IoIosCode style={iconStyle} className="nav-links" />,
      name: "skills",
      link: "/#skills",
    },
    {
      icon: <PiPackageThin style={iconStyle} className="nav-links" />,
      name: "projects",
      link: "/projects",
    },
    {
      icon: <PiArticleThin style={iconStyle} className="nav-links" />,
      name: "blogs",
      link: "/blogs",
    },
  ];
  const [shownav, setShowNav] = useState(false);

  // const links = gsap.utils.toArray(linksRef.current.children);

  return (
    <>
      <nav
        id="nav-bar"
        className={`nav-bar ${
          shownav && "shownav"
        } w-[60px] min-w-[60px]  border-solid border-r border-fourth flex flex-col justify-center items-center gap-[2rem]`}
      >
        <a className="text-[1rem] text-primary absolute top-10" href="/">
          D.E
        </a>
        <div className="flex flex-col gap-8" id="nav-links">
          {navLinks.map((item) => {
            return (
              <a
                className="relative flex items-center"
                key={item.name}
                href={item.link}
                onClick={() => setShowNav(false)}
              >
                {item.icon}
                <p className="nav-link-text text-primary hidden absolute text-[13px] right-[-6.5rem] w-[100px] bg-black px-[10px] text-center py-[5px] rounded-md">
                  {item.name}
                </p>
              </a>
            );
          })}
        </div>
      </nav>
      <div
        className="mobile-menu absolute bottom-8 left-8 p-3 rounded-full bg-neutral-700 z-100 cursor-pointer"
        onClick={() => setShowNav(!shownav)}
      >
        {shownav ? (
          <MdClose className="text-xl text-white" />
        ) : (
          <CiMenuFries className="text-xl text-white" />
        )}
      </div>
    </>
  );
};

export default Navbar;
