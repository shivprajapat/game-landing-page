import { IconLeftArrow, IconRightArrow } from "@/assets/images";
import { Heading } from "@/components";
import WinnersCard from "@/components/WinnersCard";
import { winnersData } from "@/constants";
import React, { useRef } from "react";
import Slider from "react-slick";

const Winners = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Disable default arrows
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
      <div className="container">
        <Heading>Trusted by 10 lakh+ Indians</Heading>

        <Slider {...settings} ref={sliderRef}>
          {winnersData.map((item, index) => (
            <div key={index}>
              <WinnersCard {...item} />
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

export default Winners;
