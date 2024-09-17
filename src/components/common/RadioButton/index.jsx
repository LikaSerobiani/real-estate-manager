/* eslint-disable react/prop-types */

const RadioButton = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative flex items-center justify-center w-[17px] h-[17px] border border-secondary rounded-full">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="appearance-none h-full rounded-full"
        />
        <div
          className={`w-[7px] h-[7px] rounded-full transition-all ${
            checked ? "bg-[#021526]" : "bg-transparent"
          }`}
        ></div>
      </div>
      {label && (
        <span className="text-secondary text-[14px] font-normal leading-[16.8px] font-firago">
          {label}
        </span>
      )}
    </label>
  );
};

export default RadioButton;
