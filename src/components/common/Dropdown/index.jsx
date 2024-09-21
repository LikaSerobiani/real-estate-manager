/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const Dropdown = ({ title, children, applyButtonComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`px-3 py-2 rounded-md flex justify-between items-center ${
          isOpen ? "bg-[#F3F3F3]" : ""
        }`}
        onClick={toggleDropdown}
      >
        <span className="text-base font-firago text-secondary font-medium mr-2">
          {title}
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-max">
          {children}
          <div className="flex w-full justify-end items-center pr-6 pb-6">
            {applyButtonComponent(closeDropdown)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
