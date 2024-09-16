/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Input({ label, type, id, value, onChange }) {
  return (
    <div className="w-[384px] h-[64px] flex flex-col gap-[5px]">
      <label
        htmlFor={id || "inputField"}
        className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary h-[17px]"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        className="h-[42px] rounded-[6px] border p-[10px] border-lightGray"
        onChange={onChange}
      />
    </div>
  );
}
