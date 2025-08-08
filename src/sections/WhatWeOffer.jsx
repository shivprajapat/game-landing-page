import React, { useState, useEffect } from "react";
import Heading from "@/components/Heading";
import { OfferCard } from "@/components";
import {
  icon100Secure,
  icon24X7Support,
  iconRealPlayers,
  iconREFEREarn,
} from "@/assets/images";

const messages = [
  "Naresh from Odisha won ₹844 in 3 Days",
  "Rajendra from Madhya Pradesh won ₹723 in 3 Days",
  "Guddu from Madhya Pradesh won ₹1620 in 4 Days",
  "Kalicharan from Odisha won ₹553 in 7 Days",
  "Mahendra from Rajasthan won ₹1233 in 7 Days",
];
const WhatWeOffer = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex(prev => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 md:py-8" id="offers">
      <div className="max-w-5xl px-4 mx-auto">
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Heading className="!mb-5">What We Offers</Heading>
          <div
            className={`bg-black border mx-auto transition-opacity duration-300 border-primary shadow px-3 py-1 w-fit rounded-md ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white uppercase text-sm font-medium font-urbanist">
              {messages[index]}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <OfferCard
            imageSrc={icon100Secure}
            heading="100%"
            duration="1000"
            description="Secure"
          />
          <OfferCard
            imageSrc={iconRealPlayers}
            heading="No Bots"
            duration="2000"
            description="Real Players"
          />
          <OfferCard
            imageSrc={iconREFEREarn}
            heading="Refer"
            duration="3000"
            description="& Earn"
          />
          <OfferCard
            imageSrc={icon24X7Support}
            heading="24X7"
            duration="3000"
            description="Support"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
