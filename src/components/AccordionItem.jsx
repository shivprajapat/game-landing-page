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
        className="w-full text-left rounded px-4 py-3 bg-black flex justify-between items-center transition-colors"
      >
        <span className="font-medium">{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight,
        }}
        className={`transition-all duration-500 ease-in-out overflow-hidden px-4 bg-white text-gray-700`}
      >
        <div className="py-3">{content}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
