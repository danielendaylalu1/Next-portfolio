import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faBlog,
  faCode,
  faNewspaper,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";

// import React from "react";

const Navbar = () => {
  const iconStyle = {
    color: "#bbbbbb",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };
  const navLinks = [
    { icon: faAddressCard, name: "about", link: "/#about" },
    { icon: faCode, name: "skills", link: "/#skills" },
    { icon: faRocket, name: "projects", link: "/#projects" },
    { icon: faNewspaper, name: "blogs", link: "/blogs" },
  ];
  return (
    <nav className="w-[60px] min-w-[60px]  border-solid border-r border-fourth flex flex-col justify-center items-center gap-[2rem]">
      {navLinks.map((item) => {
        return (
          <a
            className="relative flex items-center"
            key={item.name}
            href={item.link}
          >
            <FontAwesomeIcon
              className="nav-links"
              icon={item.icon}
              style={iconStyle}
            />
            <p className="nav-link-text text-primary hidden absolute text-[13px] right-[-4.8rem] w-[70px] bg-black px-[10px] text-center py-[5px] rounded-md">
              {item.name}
            </p>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
