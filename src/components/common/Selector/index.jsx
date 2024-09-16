/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DownArrow from "../Icons/DownArrow";
import PlusCircle from "../Icons/PlusCircle";

export default function CustomSelector({
  label,
  options,
  selectedOption,
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (option === "დაამატე აგენტი") {
      handleDefaultOptionSelect();
    } else {
      onSelect(option);
      setIsOpen(false);
    }
  };

  const handleDefaultOptionSelect = () => {
    alert("Default option selected");
  };

  return (
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary">
          {label}*
        </label>
      )}
      <div className="relative ">
        <button
          onClick={toggleDropdown}
          className={`w-[384px] h-[42px] border border-lightGray flex items-center justify-between p-[10px] gap-[10px] ${
            isOpen ? "rounded-t-[6px]" : "rounded-[6px]"
          }`}
        >
          <span className="h-[17px] font-firago font-normal text-[14px] leading-[16.8px] text-secondary">
            {selectedOption || "აირჩიე"}
          </span>
          <DownArrow />
        </button>

        {/* Dropdown options */}
        {isOpen && (
          <div className="absolute w-[384px] max-h-[165px] overflow-y-auto border border-lightGray border-t-0 rounded-b-[6px] bg-white z-[10]">
            {/* Default Option */}
            <button
              onClick={() => handleSelect("დაამატე აგენტი")}
              className="text-secondary font-firago w-full h-[42px] flex items-center p-[10px] gap-[10px] border-b border-lightGray"
            >
              <PlusCircle />
              <span>დაამატე აგენტი</span>
            </button>

            {/* Other Options */}
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="text-secondary font-firago w-full h-[42px] flex p-[10px] gap-[10px] border-b border-lightGray last:rounded-b-[6px] last:border-b-0"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
