import React from "react";

const index = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-3">
      <div className="relative size-10">
        <div className="absolute rounded-full border-blue-100 size-10 border-[3px]"></div>
        <svg
          width="100%"
          height="100%"
          fill="none"
          className="absolute animate-spin stroke-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="1.75"
          viewBox="1 0.125 23 23.75"
        >
          <path
            d="M12.5 23c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default index;
