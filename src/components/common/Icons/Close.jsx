/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Close() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M10.5 3.5L3.5 10.5"
          stroke={isHovered ? "#021526" : "#354451"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 3.5L10.5 10.5"
          stroke={isHovered ? "#021526" : "#354451"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
