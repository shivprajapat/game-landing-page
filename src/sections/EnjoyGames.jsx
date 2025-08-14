import { iconLeftArrow, iconRightArrow } from "@/assets/images";
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
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 500,
    centerMode: true,
    autoplaySpeed: 2000,
    // waitForAnimate: true,
    className: "center",
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      { breakpoint: 1366, settings: { slidesToShow: 4.2 } },
      { breakpoint: 1199, settings: { slidesToShow: 4.2 } },
      { breakpoint: 1100, settings: { slidesToShow: 4 } },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, centerPadding: "70px" },
      },
    ],
  };
  return (
    <section className="pt-12 md:pt-12 md:pb-12 relative">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="relative sm:before:bg-white before:absolute before:bottom-7 before:h-[95%] before:w-full md:before:w-2/3 xl:before:w-2/5 before:left-1/2 before:-translate-x-1/2 before:rounded-t-4xl sm:p-5 enjoy-language-bg">
          {/* <div className="absolute w-full md:w-2/3 xl:w-2/5 left-1/2 -translate-x-1/2 bg-red-500 h-full">
          <span>E</span>
          <span>H</span>
        </div> */}
          <div className="text-center mb-5 sm:mb-9">
            <Heading className="!mb-2">
              <div
                className="flex justify-center items-center gap-2 sm:text-black"
                data-aos="fade-up"
              >
                6+ Game Mode
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
              IN 2 LANGUAGES
            </span>
          </div>
          <div className="z-20 top-slider relative">
            <Slider {...settings} ref={sliderRef}>
              {enjoyGamesSliderData.map((item, index) => (
                <div
                  key={index}
                  className="relative slide-wrapper !flex sm:!block justify-center items-center"
                >
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

            <div className="flex-between w-full absolute top-1/2 translate-y-1/2">
              <button
                className="transition-all sm:-ml-4 duration-200 cursor-pointer rounded-full bg-yellow-500 p-2"
                onClick={handlePrevClick}
              >
                <img
                  src={iconLeftArrow}
                  alt="Previous"
                  width={16}
                  height={16}
                />
              </button>
              <button
                className="transition-all duration-200 sm:-mr-0 cursor-pointer rounded-full bg-yellow-500 p-2"
                onClick={handleNextClick}
              >
                <img src={iconRightArrow} alt="Next" width={16} height={16} />
              </button>
            </div>
          </div>
          <div className="enjoy-game-shape w-full absolute bottom-0 left-0 z-20 bg-[#231616] flex-center">
            <div>
              <img
                src={
                  enjoyGamesSliderData[
                    activeIndex % enjoyGamesSliderData.length
                  ].icon
                }
                alt="icon"
                className="size-20 sm:size-28 object-contain mx-auto"
              />
              <p className="text-white font-medium text-sm md:text-xl text-center px-5">
                {
                  enjoyGamesSliderData[
                    activeIndex % enjoyGamesSliderData.length
                  ].text
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyGames;
