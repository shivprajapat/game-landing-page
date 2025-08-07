import React from "react";
import Tilt from "./Tilt";
import { tiltOption } from "@/constants/tiltOption";

const OfferCard = ({ imageSrc, heading, duration }) => {
  return (
    <Tilt className="box" options={tiltOption}>
      <div
        className="relative overflow-hidden h-60 sm:h-80 rounded-3xl cursor-pointer bg-black"
        data-aos="fade-up"
        data-aos-duration={duration}
      >
        <div className="z-10 absolute w-full h-full peer" />
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[145%] peer-hover:h-[145%] -top-32 -left-16 w-32 h-44 rounded-full bg-primary transition-all duration-500" />
        <div className="absolute flex  text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-primary transition-all duration-500 peer-hover:text-xl peer-hover:sm:text-3xl font-bold text-black">
          <h5 className="transition-all duration-500">{heading}</h5>
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          <img src={imageSrc} alt="offer" />
        </div>
      </div>
    </Tilt>
  );
};

export default OfferCard;
