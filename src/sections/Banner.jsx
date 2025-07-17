import { ImageBanner } from "@/assets/images";
import { Button } from "@/components";
import React from "react";

const Banner = () => {
  return (
    <section id="home" className="">
      <div className="max-w-2xl lg:max-w-6xl mx-4 xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="bg-black border border-[#ffca37] shadow px-4 py-2 w-fit rounded-full p-[1px] mb-3">
              <p className="text-white uppercase text-lg font-semibold font-urbanist">
                Play Ludo & Win Real Money
              </p>
            </div>
            <h1 className="text-3xl md:leading-normal lg:text-5xl xl:text-7xl text-white font-bold font-urbanist mb-10">
              Up to
              <span className="text-[#ffca37]"> ₹ 1 Crore </span> Daily!
            </h1>

            <Button className="px-3 md:px-4 lg:px-6 font-semibold md:text-lg lg:text-2xl py-3 lg:py-5">
              Download Now
            </Button>
          </div>
          <div className="h-full max-w-6xl mx-auto w-full">
            <img
              src={ImageBanner}
              alt="log"
              // width={438}
              // height={350}
              className="mx-auto md:h-80 lg:h-96 xl:h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
