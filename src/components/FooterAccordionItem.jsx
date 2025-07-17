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
    <div className="bg-black overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-2 flex justify-between items-center transition-colors"
      >
        <span className="font-medium">{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden px-4 font-normal text-sm bg-white text-black"
      >
        <div className="py-3">
          <ul className="flex items-start flex-wrap gap-x-5 gap-y-2">
            {content.map((link) => (
              <li key={link.id}>
                <a
                  className="hover:text-[#ffca37] transition-all duration-150"
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
