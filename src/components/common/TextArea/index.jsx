/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import ExclamationMarkIcon from "../Icons/ExclamationMark";
import CheckIcon from "../Icons/Check";

export default function Textarea({
  label,
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
    <div className="flex flex-col gap-[5px]">
      <label className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-[788px] h-[135px] p-[10px] gap-[10px] rounded-[6px] border ${
          hasError
            ? "border-error"
            : isValid
            ? "border-success"
            : "border-lightGray "
        }`}
        style={{ resize: "none", outline: "none" }}
      ></textarea>
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
Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
