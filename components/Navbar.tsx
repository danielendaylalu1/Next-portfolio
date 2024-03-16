// import React from "react";
import { CiUser } from "react-icons/ci";
import { PiArticleThin } from "react-icons/pi";
import { IoIosCode } from "react-icons/io";
import { PiPackageThin } from "react-icons/pi";

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
      link: "/#about",
    },
    {
      icon: <IoIosCode style={iconStyle} className="nav-links" />,
      name: "skills",
      link: "/#skills",
    },
    {
      icon: <PiPackageThin style={iconStyle} className="nav-links" />,
      name: "projects",
      link: "/#projects",
    },
    {
      icon: <PiArticleThin style={iconStyle} className="nav-links" />,
      name: "blogs",
      link: "/blogs",
    },
  ];
  return (
    <nav className="w-[60px] min-w-[60px]  border-solid border-r border-fourth flex flex-col justify-center items-center gap-[2rem]">
      <a className="text-[1rem] text-primary absolute top-10" href="/">
        D.E
      </a>
      {navLinks.map((item) => {
        return (
          <a
            className="relative flex items-center"
            key={item.name}
            href={item.link}
          >
            {item.icon}
            <p className="nav-link-text text-primary hidden absolute text-[13px] right-[-6.5rem] w-[100px] bg-black px-[10px] text-center py-[5px] rounded-md">
              {item.name}
            </p>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
