import { iconLeftArrow, iconRightArrow } from "@/assets/images";
import { Heading } from "@/components";
import WinnersCard from "@/components/WinnersCard";
import { winnersData } from "@/constants";
import { useSlider } from "@/hooks/useSlider";
import React from "react";
import Slider from "react-slick";

const Winners = () => {
  const responsiveBreakpoints = [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
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
  ];

  const { sliderRef, settings, handlePrevClick, handleNextClick } = useSlider({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: responsiveBreakpoints,
  });

  return (
    <section className="py-5 md:py-8">
      <div className="max-w-7xl px-4 mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000">
          <Heading>Trusted by 10 lakh+ Indians</Heading>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {winnersData.map((item, index) => (
            <div key={index}>
              <WinnersCard {...item} />
            </div>
          ))}
        </Slider>
        <div className="flex-center  bg-black w-fit mx-auto px-3 py-2 rounded-full gap-3  mt-5">
          <button
            className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-yellow-500 p-2"
            onClick={handlePrevClick}
          >
            <img src={iconLeftArrow} alt="Previous" width={20} height={20} />
          </button>
          <button
            className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-yellow-500 p-2"
            onClick={handleNextClick}
          >
            <img src={iconRightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Winners;
