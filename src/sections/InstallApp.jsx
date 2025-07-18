import { IconLeftArrow, IconRightArrow } from "@/assets/images";
import { Heading } from "@/components";
import { howToInstallData } from "@/constants";
import React, { useRef } from "react";
import Slider from "react-slick";

const InstallApp = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          margin: 5,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className=" py-5 md:py-8">
      <div className="max-w-5xl lg:mx-auto mx-4 p-4 md:p-6 rounded-xl lg:p-10 bg-black">
        <div className="mb-16">
          <Heading>HOW TO INSTALL</Heading>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {howToInstallData.map((item, index) => (
            <div key={index}>
              <div>
                <img
                  src={item.imageUrl}
                  alt=""
                  className="object-contain w-full h-96"
                />
                <div className="mb-2 text-center w-full">
                  <p className="text-[#ffcc37] trim-both font-bold text-xl sm:text-2xl mb-2">
                    {item.step}
                  </p>
                  <p className="text-base font-normal text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex-center  bg-black w-fit mx-auto px-3 py-2 rounded-full gap-3  mt-5">
          <button
            className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-[#ffcc37] p-2"
            onClick={handlePrevClick}
          >
            <img src={IconLeftArrow} alt="Previous" width={20} height={20} />
          </button>
          <button
            className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-[#ffcc37] p-2"
            onClick={handleNextClick}
          >
            <img src={IconRightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallApp;
