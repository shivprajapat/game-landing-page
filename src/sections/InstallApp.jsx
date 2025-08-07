import { IconLeftArrow, IconRightArrow } from "@/assets/images";
import { Heading } from "@/components";
import Tilt from "@/components/Tilt";
import { howToInstallData } from "@/constants";
import { tiltOption } from "@/constants/tiltOption";
import { useSlider } from "@/hooks/useSlider";
import React from "react";
import Slider from "react-slick";

const InstallApp = () => {
  const responsiveBreakpoints = [
    {
      breakpoint: 1024,
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
  ];

  const { sliderRef, settings, handlePrevClick, handleNextClick } = useSlider({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: responsiveBreakpoints,
  });
  return (
    <section className="py-5 md:py-8" id="install">
      <div className="max-w-5xl mx-auto p-4 md:p-6 rounded-xl lg:p-10 bg-black">
        <div data-aos="fade-up">
          <Heading>How To Install</Heading>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {howToInstallData.map((item, index) => (
            <div key={index}>
              <div>
                <img
                  src={item.imageUrl}
                  alt={item?.title}
                  className="object-contain w-full h-96"
                />
                <div className="mb-2 text-center w-full">
                  <p className="text-yellow-500 trim-both font-bold text-xl sm:text-2xl mb-2">
                    {item.step}
                  </p>
                  <p className="text-base font-normal text-white px-3 sm:px-0">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex-center  bg-black w-fit mx-auto px-3 py-2 rounded-full gap-3  mt-5">
          <button
            className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-yellow-500 p-2"
            onClick={handlePrevClick}
          >
            <img src={IconLeftArrow} alt="Previous" width={20} height={20} />
          </button>
          <button
            className="bg-[#212529] transition-all duration-200 cursor-pointer rounded-full hover:bg-yellow-500 p-2"
            onClick={handleNextClick}
          >
            <img src={IconRightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
        <div className="">
          <Heading>Snapshot Of Ludo players</Heading>
          <Tilt className="box" options={tiltOption}>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/online-gamming-11984841-9779170.png"
              alt=""
              className="mx-auto w-full max-w-lg"
            />
          </Tilt>
          <div className="space-y-5 text-center">
            <p className="text-base sm:text-lg font-normal">
              ludoplayers offers skill-based games and formats, ensuring
              fairness and safety. As a member of IEIC, ludoplayers guarantees
              the integrity of all games on the platform. Trusted payment
              partners like PayTM, Google Pay, PhonePe, and BHIM are available
              for secure transactions. Fraudulent play is restricted through
              advanced fraud detection mechanisms.
            </p>
            <p className="text-base sm:text-lg font-normal">
              The ludoplayers app is accessible on Android and iOS. Android
              users can download it from the Download Button on this page, while
              iOS users can find it on the Apple App Store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallApp;
