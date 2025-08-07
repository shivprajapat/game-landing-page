import React from "react";

const Button = ({ fullWidth, loading, children, className, ...props }) => {
  return (
    <>
      <button
        className={`${className} ${
          fullWidth && "w-100"
        } btn relative z-10 cursor-pointer overflow-hidden bg-primary uppercase rounded-full text-black font-semibold text-base btn-border px-5 py-3 after:absolute after:bg-white after:-z-10 after:-left-1/5 after:-right-1/5 after:bottom-0 after:top-0`}
        disabled={loading}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
