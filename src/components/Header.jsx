import React, { useEffect, useState } from "react";

import { navLinks } from "@/constants";
import { IconClose, IconLogo, IconMenu } from "@/assets/images";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // Define the function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to only run once on mount and unmount

  return (
    <header
      className={`fixed  w-full z-20 transition-all duration-200 ${
        show && " bg-black"
      }`}
    >
      <div className="container">
        <nav className="w-full flex py-1 justify-between items-center">
          <a href="#">
            <img
              src={IconLogo}
              alt="log"
              className={`transition-all duration-200 ${
                show ? "w-20" : "w-20 md:w-24"
              }`}
            />
          </a>
          <ul className="list-none  transition-all duration-200 sm:flex hidden justify-end items-center bg-black py-4 px-10 lg:py-5 lg:px-12 rounded-full ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium transition-all duration-150 cursor-pointer font-rubik text-[16px] hover:text-[#ffca37] ${
                  active === nav.title ? "text-[#ffca37]" : "text-white"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? IconClose : IconMenu}
              alt="menu"
              className=" object-contain"
              width={24}
              height={24}
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black absolute top-[70px] right-0 mx-4 min-w-[140px] rounded-xl animation-slide-top z-[1]`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium font-rubik cursor-pointer text-[16px] transition-all duration-150 ${
                      active === nav.title ? "text-[#ffca37]" : "text-white"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
