import { AccordionItem, Heading } from "@/components";
import { accordionData } from "@/constants";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-7 md:py-10" id="faq">
      <div data-aos="fade-up">
        <Heading>FAQ's About Chess Game</Heading>
      </div>

      <div className="max-w-5xl px-4 mx-auto">
        <div className="space-y-2" data-aos="fade-up" data-aos-duration="1000">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
