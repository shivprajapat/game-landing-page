import { iconStarEmoji } from "@/assets/images";
import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-2xl md:text-4xl font-semibold text-white text-center mb-lg-5 mb-4 md:mb-9 relative inline-block w-full`}
    >
      <img
        src={iconStarEmoji}
        alt="star"
        className="h-6 mx-auto absolute -top-5 right-1/2 -translate-x-1/2"
      />
      {children}
    </h2>
  );
};

export default Heading;
