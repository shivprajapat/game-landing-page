import React from "react";

const OfferCard = ({ imageSrc, heading, duration }) => {
  return (
    <div
      className="relative overflow-hidden h-80 rounded-3xl cursor-pointer bg-black"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="z-10 absolute w-full h-full peer" />
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-primary transition-all duration-500" />
      <div className="absolute flex  text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-primary transition-all duration-500 peer-hover:text-3xl font-bold text-black">
        <h5 className="transition-all duration-500">{heading}</h5>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase">
        <img src={imageSrc} alt="offer" />
      </div>
    </div>
  );
};

export default OfferCard;
