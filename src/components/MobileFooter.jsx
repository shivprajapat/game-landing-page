import { FooterAccordionItem } from "@/components";
import { footerLinks } from "@/constants";
import React, { useState } from "react";

const MobileFooter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mb-5 space-y-1">
      {footerLinks.map((item, index) => (
        <FooterAccordionItem
          key={index}
          title={item.heading}
          content={item.links}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
