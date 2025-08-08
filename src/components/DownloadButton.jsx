import React from "react";

const DownloadButton = () => {
  return (
    <button className="button bg-[#E79021] size-[75px] rounded-full flex-center overflow-hidden relative">
      <p className="button__text absolute inset-0">
        {"Get Download Link".split("").map((char, i) => (
          <span
            key={i}
            className="text-xs uppercase inset-1 absolute font-normal"
            style={{ "--index": i }}
          >
            {char}
          </span>
        ))}
      </p>
      <div className="button__circle size-7 bg-[#231616] relative flex-center overflow-hidden rounded-full">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon button__icon--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default DownloadButton;
