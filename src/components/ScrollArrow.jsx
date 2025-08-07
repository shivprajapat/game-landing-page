import React, { useEffect, useState } from "react";

const ScrollArrow = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(1); // Avoid division by zero

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const updateScrollData = () => {
      setScrollY(window.scrollY);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollHeight(height > 0 ? height : 1);
    };

    updateScrollData(); // Initial set

    window.addEventListener("scroll", updateScrollData);
    window.addEventListener("resize", updateScrollData);

    return () => {
      window.removeEventListener("scroll", updateScrollData);
      window.removeEventListener("resize", updateScrollData);
    };
  }, []);

  const scrollProgress = Math.min((scrollY / scrollHeight) * 100, 100);
  const offset = circumference - (scrollProgress / 100) * circumference;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="scrollArrow"
      className="animate-bounce cursor-pointer z-[999] flex justify-center items-center fixed bottom-1 md:bottom-5 left-1/2 -translate-x-1/2 bg-[#E79021] rounded-full"
      style={{
        display: scrollY > 50 ? "flex" : "none",
      }}
      onClick={handleClick}
    >
      <span className="animate-ping absolute inline-flex w-9 h-9 rounded-full bg-primary opacity-75" />

      <svg viewBox="0 0 50 50" className="size-10">
        <circle
          fill="transparent"
          r={radius}
          stroke="#fff"
          strokeWidth="3"
          cx="25"
          cy="25"
          strokeDasharray={circumference}
          strokeDashoffset={isNaN(offset) ? circumference : offset}
          style={{
            transition: "stroke-dashoffset 0.2s linear",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#fff"
          fontSize="18"
          dy=".1em"
        >
          ↓
        </text>
      </svg>
    </div>
  );
};

export default ScrollArrow;
