import { iconLoader } from "@/assets/images";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex-center">
      <img src={iconLoader} width={100} height={100} alt="loader" />
    </div>
  );
};

export default Loader;
