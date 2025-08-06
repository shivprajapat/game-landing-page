import React, { useEffect, useState } from "react";

const ScrollArrow = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set scroll height on mount
    setScrollHeight(document.body.scrollHeight - window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only calculate if scrollHeight is not 0
  const scrollProgress =
    scrollHeight > 0 ? Math.min((scrollY / scrollHeight) * 100, 100) : 0;

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
      className="animate-bounce cursor-pointer z-[999] flex justify-center items-center fixed bottom-1 md:bottom-5 left-1/2 -translate-1/2 bg-yellow-500 rounded-full"
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
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: isNaN(offset) ? 0 : offset,
            transition: "stroke-dashoffset 0.35s",
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
