import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold w-full text-white text-center mb-lg-5 mb-4 md:mb-9">
      {children}
    </h2>
  );
};

export default Heading;
