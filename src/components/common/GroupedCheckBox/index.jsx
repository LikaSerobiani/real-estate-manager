/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "../Checkbox";

const GroupedCheckbox = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (optionId) => {
    const updatedSelectedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];

    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions);
  };

  return (
    <>
      {options.map((option) => (
        <Checkbox
          key={option.id}
          id={option.id}
          label={option.name}
          checked={selectedOptions.includes(option.id)}
          onChange={() => handleCheckboxChange(option.id)}
        />
      ))}
    </>
  );
};

export default GroupedCheckbox;
