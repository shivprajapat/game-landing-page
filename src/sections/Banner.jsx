import { ImageBanner, ImageCertificate } from "@/assets/images";
// import { Button } from "@/components";
import Typewriter from "typewriter-effect";
import React from "react";
import { tiltOption } from "@/constants/tiltOption";
import Tilt from "@/components/Tilt";

const DownloadBtn = () => {
  return (
    <button
      className="button bg-[#E79021] size-24 rounded-full flex-center overflow-hidden relative"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <p className="button__text absolute inset-0">
        {"Get Download Link".split("").map((char, i) => (
          <span
            key={i}
            className="text-sm uppercase inset-1 absolute font-medium"
            style={{ "--index": i }}
          >
            {char}
          </span>
        ))}
      </p>
      <div className="button__circle size-10 bg-[#231616] relative flex-center overflow-hidden rounded-full">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon"
          width="14"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon button__icon--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
};
const Banner = () => {
  return (
    <section id="home" className="pb-7 md:pb-10">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-auto md:flex-1/2">
            <div className="mt-8 mb-6 md:mt-0 md:mb-8">
              <div
                className="bg-black border border-primary shadow px-4 py-2 w-fit rounded-full p-[1px] mb-5"
                data-aos="fade-up"
              >
                <p className="text-white uppercase text-base sm:text-lg font-semibold font-urbanist">
                  Play Ludo & Win Real Money
                </p>
              </div>
              <div
                className="mb-5 md:mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1
                  className="text-5xl md:leading-normal  xl:text-6xl text-white font-bold font-urbanist mb-5"
                  style={{
                    textShadow: "3px 2px 0 #9C9C9C",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        'Up to <span style="color:#E79021;">₹ 1 Crore</span> Daily!',
                        'PLAY GAMES WIN <span style="color:#E79021;">Cash</span>!',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="text-white text-base sm:text-lg font-normal">
                  Download and play LUDO Cash online with your friends and win
                  big daily
                </p>
              </div>
              {/* <Button
                className="font-semibold items-center inline-flex gap-1"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <span>Get Download link</span>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Button> */}
              <div className="sm:flex hidden">
                <DownloadBtn />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img
                src={ImageCertificate}
                alt="certificate"
                className="max-w-full rounded-md md:h-16 object-contain lg:h-20"
              />
            </div>
          </div>
          <div
            className="h-full flex-auto md:flex-1/2 max-w-6xl mx-auto w-full"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            <div className="sm:hidden flex">
              <DownloadBtn />
            </div>
            <Tilt className="box" options={tiltOption}>
              <img
                src={ImageBanner}
                alt="banner"
                // width={438}
                // height={350}
                className="ml-auto md:h-80 lg:h-96 xl:h-[550px] object-contain"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
