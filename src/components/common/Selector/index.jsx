/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DownArrow from "../Icons/DownArrow";
export default function CustomSelector({ options, selectedOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className={`w-[384px] h-[42px] border border-lightGray flex items-center justify-between p-[10px] gap-[10px] ${
          isOpen ? "rounded-t-[6px]" : "rounded-[6px]"
        }`}
      >
        <span className="w-[50px] h-[17px] font-firago font-normal text-[14px] leading-[16.8px] text-secondary">
          {selectedOption || "აირჩიე"}
        </span>
        <DownArrow />
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute">
          {options.map((option, index) => {
            const isLastOption = index === options.length - 1;

            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-[384px] h-[42px] flex p-[10px] gap-[10px] border border-t-0 border-lightGray ${
                  isLastOption ? "rounded-b-[6px]" : "rounded-t-none"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
