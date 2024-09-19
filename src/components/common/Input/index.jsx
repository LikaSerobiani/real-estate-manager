/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ExclamationMarkIcon from "../Icons/ExclamationMark";
import CheckIcon from "../Icons/Check";
import PropTypes from "prop-types";

export default function Input({
  label,
  type,
  id,
  value,
  onChange,
  error,
  onBlur,
  initialMessage,
  touched,
}) {
  const hasError = error;
  const isValid = !hasError && value.length > 0;

  return (
    <div className="w-[384px] flex flex-col gap-[5px]">
      <label
        htmlFor={id || "inputField"}
        className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`h-[42px] rounded-[6px] border p-[10px] focus:outline-none ${
          hasError
            ? "border-error"
            : isValid
            ? "border-success"
            : "border-lightGray "
        }`}
      />

      <div className="text-[14px] font-normal">
        {!isValid && !hasError && !touched && (
          <div className="flex items-center gap-1">
            <CheckIcon color="#021526" />
            <span className="text-secondary">{initialMessage}</span>
          </div>
        )}
        {isValid && !hasError && (
          <div className="flex items-center gap-1">
            <CheckIcon color="#45A849" />
            <span className="text-success">{initialMessage}</span>
          </div>
        )}
        {hasError && (
          <div className="flex items-center gap-1">
            <ExclamationMarkIcon color="#F93B1D" />
            <span className="text-error">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  initialMessage: PropTypes.string.isRequired,
};
