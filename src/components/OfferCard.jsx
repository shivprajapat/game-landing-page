import React, { useState } from "react";
import Tilt from "./Tilt";
import { tiltOption } from "@/constants/tiltOption";

const OfferCard = ({ imageSrc, heading, duration, description }) => {
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
        <div className="relative overflow-hidden h-52 sm:h-60 rounded-3xl cursor-pointer bg-[#231616] shadow">
          <div
            className={`absolute rounded-full transition-all duration-300 ease-in-out font-bold text-black flex text-center
               ${
                 active
                   ? "right-0 bg-yellow-500 bottom-0 items-center justify-center w-full h-full rounded-b-none"
                   : "-bottom-32 bg-yellow-500 -right-16 w-36 items-end justify-end"
               }
            `}
          />
          <div
            className={`w-full h-full items-center justify-center flex px-3 text-center relative ${
              active && "z-10"
            }`}
          >
            <div>
              <img
                src={imageSrc}
                alt="offer"
                className="max-w-40 mx-auto mb-3"
              />
              <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                {heading}
              </h5>
              <p
                className={`text-base font-normal ${
                  active ? "text-white" : "text-slate-400"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default OfferCard;
