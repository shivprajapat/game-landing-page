import { IconLeftArrow, IconRightArrow } from "@/assets/images";
import { Heading } from "@/components";
import { enjoyGamesSliderData } from "@/constants";
import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

const EnjoyGames = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevClick = useCallback(() => {
    if (sliderRef.current && sliderRef.current.slickPrev) {
      sliderRef.current.slickPrev();
    }
  }, []);

  const handleNextClick = useCallback(() => {
    if (sliderRef.current && sliderRef.current.slickNext) {
      sliderRef.current.slickNext();
    }
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 2000,
    centerMode: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    waitForAnimate: false,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 4.2 } },
      { breakpoint: 1100, settings: { slidesToShow: 4 } },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerPadding: "120px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 2.3 } },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, centerPadding: "100px" },
      },
    ],
  };
  return (
    <section className="py-5 md:py-8 bg-[#231616] rounded-t-full relative">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="relative sm:before:bg-white before:absolute before:bottom-7 before:h-[95%] before:w-full md:before:w-2/3 xl:before:w-2/5 before:left-1/2 before:-translate-x-1/2 before:rounded-t-4xl sm:p-5">
          <div className="text-center mb-8 sm:mb-9">
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
            </span>
          </div>

          {/* 👇 Slider */}
          <div className="z-20 top-slider relative">
            <Slider {...settings} ref={sliderRef}>
              {enjoyGamesSliderData.map((item, index) => (
                <div key={index} className="relative slide-wrapper flex-center">
                  <div className="slide-card w-full relative">
                    <div
                      className="size-full relative bg-no-repeat z-[1]"
                      style={{
                        backgroundImage:
                          "url(https://d3g4wmezrjkwkg.cloudfront.net/website/images/phoneBorder.webp)",
                        backgroundSize: "100% 100%",
                      }}
                    />
                    <video
                      loop
                      muted
                      preload="none"
                      playsInline
                      poster={item.videoPoster}
                      className="block absolute top-0 h-full rounded-[30px] w-[97%] object-cover px-0.5"
                    />
                  </div>
                </div>
              ))}
            </Slider>

            {/* 👇 External Text Based on Active Slide */}
          </div>
        </div>
        <div className="absolute bottom-2 w-full lg:bottom-3 xl:bottom-8 left-1/2 -translate-x-1/2 z-30">
          <p className="text-black font-bold text-xl md:text-2xl lg:text-3xl text-center">
            {
              enjoyGamesSliderData[activeIndex % enjoyGamesSliderData.length]
                .text
            }
          </p>
          <div className="flex-center  bg-black w-fit mx-auto px-2 py-1 rounded-full gap-2 mt-3 xl:mt-5">
            <button
              className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-[#ffcc37] p-2"
              onClick={handlePrevClick}
            >
              <img src={IconLeftArrow} alt="Previous" width={16} height={16} />
            </button>
            <button
              className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-[#ffcc37] p-2"
              onClick={handleNextClick}
            >
              <img src={IconRightArrow} alt="Next" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="enjoy-game-shape w-full absolute bottom-0 left-0 z-20 bg-[#f1b300]" />
    </section>
  );
};

export default EnjoyGames;
