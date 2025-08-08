import { iconCircleDash, iconCirclePlus } from "@/assets/images";
import React, { useState, useRef, useEffect } from "react";

const FooterAccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="bg-[#231616] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-2 flex justify-between items-center transition-colors"
      >
        <span className="font-extralight">{title}</span>
        <span className=" bg-white rounded-full size-7 min-w-7">
          <img src={isOpen ? iconCircleDash : iconCirclePlus} alt="" />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden px-4 font-normal text-base bg-white text-black"
      >
        <div className="py-3">
          <ul className="flex items-start flex-wrap gap-x-5 gap-y-2">
            {content.map(link => (
              <li key={link.id}>
                <a
                  className="hover:text-yellow-500 transition-all duration-150"
                  href={link.href}
                  target={link.target || "_self"}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterAccordionItem;
