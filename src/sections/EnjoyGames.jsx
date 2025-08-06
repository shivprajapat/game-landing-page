import { Heading } from "@/components";
import React from "react";
import Slider from "react-slick";

const EnjoyGames = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 2000,
    centerMode: true,
    centerPadding: "200px",
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-5 md:py-8 bg-[#231616] rounded-t-full">
      <div className="max-w-7xl mx-4 xl:mx-auto">
        <div className=" relative sm:before:bg-white before:absolute before:bottom-7 before:h-[95%] before:w-full md:before:w-2/3 xl:before:w-1/2 before:left-1/2 before:-translate-x-1/2 before:rounded-t-4xl sm:p-5">
          <div className="text-center mb-5 sm:mb-8">
            <Heading className="!mb-2">
              <div
                className="flex justify-center items-center gap-2 sm:text-black"
                data-aos="fade-up"
              >
                Enjoy 100+ Games
                <img
                  src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/emoji1.webp?w=64&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </Heading>
            <span
              className="bg-yellow-500 px-8 py-1 inline-block font-normal"
              style={{ clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              IN 15 LANGUAGES
            </span>{" "}
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {new Array(7).fill("").map((item, index) => (
                <div key={index} className="px-1 md:px-2">
                  <div class="relative h-96 lg:h-96 xl:h-[500px] w-full overflow-hidden rounded-xl bg-[#231616] drop-shadow-xl group">
                    <div class="absolute inset-0.5 z-[1] flex flex-col items-start justify-evenly gap-6 rounded-lg bg-[#231616] p-4 text-white opacity-90">
                      <div class="h-full w-full overflow-hidden rounded-md bg-white flex justify-center items-center relative">
                        <img
                          src="https://dkees1a826nmf.cloudfront.net/productionbackoffice/website/Frame%202087326845-1751983712098.png"
                          alt=""
                          className="w-full h-full object-cover absolute inset-0"
                        />
                        as
                      </div>
                      <p class="text-base font-normal">
                        Roll the dice, race to the finish, block rivals, and win
                        exciting real cash rewards.
                      </p>
                    </div>
                    <div class="absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-yellow-500 blur-[50px]" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyGames;
