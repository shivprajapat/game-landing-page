import { ImagePayments } from "@/assets/images";
import React from "react";

const InstantWithDrawal = () => {
  return (
    <div className="bg-yellow-300 p-5 text-center">
      <div className="container">
        <h2 className="text-3xl text-black font-bold mb-5" data-aos="fade-up">
          Withdrawal Modes
        </h2>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src={ImagePayments}
            alt="payments"
            className="max-w-full sm:h-14 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default InstantWithDrawal;
