import React, { useEffect, useState } from "react";

import { navLinks } from "@/constants";
import { IconClose, IconLogo, IconMenu } from "@/assets/images";
import { Button } from ".";

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
      className={`fixed top-0 w-full z-20 transition-all duration-200 ${
        show && " bg-black"
      }`}
    >
      <div className="container">
        <nav className="w-full flex py-2 justify-between items-center">
          <a href="#" data-aos="fade-down">
            <img
              src={IconLogo}
              alt="logo"
              className={`transition-all duration-200 ${
                show ? "w-[70px]" : "w-[70px] md:w-20"
              }`}
            />
          </a>
          <ul
            className="list-none transition-all duration-200 gap-6 md:gap-10 lg:gap-14 sm:flex hidden justify-end items-center"
            data-aos="fade-down"
          >
            {navLinks.map(nav => (
              <li
                key={nav.id}
                className={`font-medium transition-all duration-150 cursor-pointer font-rubik text-[16px] hover:text-yellow-500 relative after:absolute after:-bottom-1 after:w-0 after:transition-all after:h-1 hover:after:w-full after:rounded-full after:left-0 after:bg-yellow-500 ${
                  active === nav.title
                    ? "text-yellow-500 after:w-full"
                    : "text-white"
                }
                `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 flex-1 sm:flex-none justify-end items-center">
            <div
              className="flex items-center gap-2 sm:gap-3"
              data-aos="fade-down"
            >
              <Button className="download-btn">Download</Button>
              <a href="https://ludoplayers.com/login" target="_blank">
                <Button className="download-btn">Login</Button>
              </a>
            </div>
            <div className="sm:hidden flex justify-end items-center">
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
                        active === nav.title ? "text-primary" : "text-white"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
