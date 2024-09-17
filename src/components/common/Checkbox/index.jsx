import { useState } from "react";
import PropTypes from "prop-types";
import Check from "../Icons/Check";

const Checkbox = ({ id, label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative w-[20px] h-[20px] border border-border rounded-sm cursor-pointer ${
          isChecked ? "bg-success border-success" : "bg-white"
        }`}
        onClick={handleCheckboxChange}
      >
        {isChecked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Check color="white" />
          </div>
        )}
      </div>
      {label && (
        <label
          htmlFor={id}
          className="text-secondary text-[14px] font-normal leading-[16.8px] font-firago"
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
