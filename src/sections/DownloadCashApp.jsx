import React from "react";

const DownloadCashApp = () => {
  return (
    <div className="bg-yellow-300 p-5 text-center">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div
            className="flex flex-col sm:flex-row sm:justify-center items-center gap-3 sm:gap-5 w-full sm:w-fit"
            data-aos="fade-right"
          >
            <div className="flex-between w-full sm:w-fit">
              <img
                src="https://cdn.dribbble.com/userupload/35406510/file/original-3b5c06647e2961c4d8d4df4efe647a8f.jpg"
                alt="game"
                className="max-w-full rounded-md h-20 sm:h-24 lg:h-28 sm:mx-auto"
              />
              <div className="bg-yellow-200 p-1 rounded-md block sm:hidden">
                <img
                  src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/winzo-games-qr-code-india.png?w=256&q=80"
                  alt="qr"
                  className="max-w-full rounded-md h-20 sm:h-24 lg:h-32 mx-auto"
                />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black text-left font-bold w-full sm:w-fit">
              Scan Code to Download <br /> Ludo Cash App NoW!
            </h2>
          </div>
          <div
            className="bg-yellow-200 p-1 rounded-md hidden sm:block"
            data-aos="fade-left"
          >
            <img
              src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/winzo-games-qr-code-india.png?w=256&q=80"
              alt="qr"
              className="max-w-full rounded-md h-20 sm:h-24 lg:h-32 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCashApp;
