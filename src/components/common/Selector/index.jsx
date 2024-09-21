/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DownArrow from "../Icons/DownArrow";
import PlusCircle from "../Icons/PlusCircle";
import CreateAgentModal from "../Modals/CreateAgent";
import ExclamationMark from "../Icons/ExclamationMark";

export default function Selector({
  label,
  options,
  selectedOption,
  onSelect,
  error,
  name,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
    handleShow();
    setIsOpen(false);
  };

  const hasError = !selectedOption && error;

  return (
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label
          htmlFor={id}
          className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary"
        >
          {label}*
        </label>
      )}
      <div className="relative ">
        <button
          type="button"
          onClick={toggleDropdown}
          id={id}
          name={name}
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
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="text-secondary font-firago w-full h-[42px] flex p-[10px] gap-[10px] border-b border-lightGray last:rounded-b-[6px] last:border-b-0"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      {hasError && (
        <div className="flex items-center gap-1 text-[14px] font-normal text-error">
          <ExclamationMark color="#F93B1D" />
          <span>{error}</span>
        </div>
      )}
      <CreateAgentModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}
