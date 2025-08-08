import { iconCircleDash, iconCirclePlus } from "@/assets/images";
import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
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
    <div className="overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left rounded px-4 py-3 bg-[#231616] flex justify-between items-center transition-colors"
      >
        <span className="font-extralight sm:font-medium">{title}</span>
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
        <div className="py-3">{content}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
