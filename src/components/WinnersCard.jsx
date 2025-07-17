import React from "react";

const WinnersCard = ({ title, imageUrl, description }) => {
  return (
    <div class="card block relative bg-white border rounded-lg z-10 overflow-hidden p-5 before:absolute before:-z-10 before:-top-4 before:-right-4 before:size-8 before:rounded-4xl before:scale-100 before:bg-black hover:border-[#212529] group mx-1 sm:mx-2">
      <div class="flex w-full items-center gap-x-2">
        <img
          src={imageUrl}
          alt=""
          width="60"
          height="60"
          class="object-cover rounded-full shrink-0"
        />
        <div class="flex flex-col mb-2 items-start justify-start w-full">
          <p class="group-hover:text-white text-black trim-both font-semibold text-base">
            {title}shiv
          </p>
          <p class="text-[#047E1E] trim-both font-bold text-lg">
            Won <span class="font-extrabold font-basement-grotesque">₹</span>
            <span class="-ml-1"> 1,00,000 </span>
          </p>
          <p class="text-xs trim-both font-normal opacity-60 group-hover:text-white text-black">
            Kerala, India
          </p>
        </div>
      </div>
      <p class="text-sm font-inter group-hover:text-white text-black font-normal tracking-[0.22px]">
        {description}
      </p>
      <div class="go-corner flex-center absolute size-8 overflow-hidden top-0 right-0 bg-[#ffee37]">
        <div class="go-arrow -mt-1 -mr-1 text-black">→</div>
      </div>
    </div>
  );
};

export default WinnersCard;
