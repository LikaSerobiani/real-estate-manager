/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Tag({ title }) {
  return (
    <div className="h-[26px] rounded-[16px] p-[6px] gap-[10px] bg-secondary bg-opacity-50 flex">
      <span className="font-firago font-medium text-[12px] leading-[14.4px] tracking-[0.04em] text-white text-center w-[70px] h-[14px]">
        {title}
      </span>
    </div>
  );
}
