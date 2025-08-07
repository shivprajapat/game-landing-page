import React, { useState } from "react";
import Tilt from "./Tilt";
import { tiltOption } from "@/constants/tiltOption";

const OfferCard = ({ imageSrc, heading, duration }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <Tilt className="box" options={tiltOption}>
      <div
        data-aos="fade-up"
        data-aos-duration={duration}
        onClick={handleToggle}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div className="relative overflow-hidden h-60 sm:h-80 rounded-3xl cursor-pointer bg-black">
          <div className="z-10 absolute w-full h-full" />

          {/* First Animation Circle */}
          <div
            className={`absolute transition-all duration-500 rounded-full bg-primary ${
              active
                ? "-top-20 -left-16 w-[145%] h-[145%]"
                : "-top-32 -left-16 w-32 h-44"
            }`}
          />

          {/* Second Animation Circle with Text */}
          <div
            className={`absolute transition-all duration-500 font-bold text-black flex text-center ${
              active
                ? "right-0 bottom-0 items-center justify-center w-full h-full text-xl sm:text-3xl rounded-b-none"
                : "-bottom-32 -right-16 w-36 h-44 items-end justify-end"
            } bg-primary rounded-full`}
          >
            <h5 className="transition-all duration-500">{heading}</h5>
          </div>

          {/* Image Content */}
          <div className="w-full h-full items-center justify-center flex uppercase">
            <img src={imageSrc} alt="offer" />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default OfferCard;
