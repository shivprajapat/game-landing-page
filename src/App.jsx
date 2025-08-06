import React, { Fragment, useEffect, useState } from "react";
import { Header, Footer, Loader } from "./components";
import {
  About,
  Banner,
  DownloadCashApp,
  FAQ,
  InstallApp,
  InstantWithDrawal,
  WhatWeOffer,
  Winners,
} from "./sections";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollArrow from "./components/ScrollArrow";

const App = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="pt-28 md:pt-32 lg:pt-36 relative pb-5 sm:pb-0">
            <Banner />
            <DownloadCashApp />
            <About />
            <Winners />
            <WhatWeOffer />
            <InstallApp />
            <InstantWithDrawal />
            <FAQ />
            <ScrollArrow />
          </main>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default App;
