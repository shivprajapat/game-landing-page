import React, { Fragment, useEffect, useState } from "react";
import { Header, Footer, Loader } from "./components";
import {
  About,
  Banner,
  DownloadCashApp,
  EnjoyGames,
  FAQ,
  InstallApp,
  InstantWithDrawal,
  WhatWeOffer,
  Winners,
} from "./sections";
import ScrollArrow from "./components/ScrollArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useIsMobile } from "./hooks/useIsMobile";
const App = () => {
  const isMobile = useIsMobile(680);

  let [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      // Optional configuration options
      duration: 1000, // Animation duration in milliseconds
      // once: true, // Whether animation should only happen once
      offset: 200, // Offset (in px) from the top of the screen
    });
    AOS.refresh();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="pt-28 md:pt-32 lg:pt-36 relative pb-5 sm:pb-0 w-full">
            <Banner />
            <DownloadCashApp />
            <EnjoyGames />
            <About />
            <Winners />
            <WhatWeOffer />
            <InstallApp />
            <InstantWithDrawal />
            <FAQ />
            {!isMobile && <ScrollArrow />}
          </main>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default App;
