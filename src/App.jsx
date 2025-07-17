import React, { Fragment } from "react";
import { Header, Footer } from "./components";
import {
  Banner,
  FAQ,
  InstallApp,
  InstantWithDrawal,
  Winners,
} from "./sections";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="pt-24 md:pt-32 lg:pt-36 relative pb-5 sm:pb-0">
        <Banner />
        <InstantWithDrawal />
        <Winners />
        <InstallApp />
        <FAQ />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
