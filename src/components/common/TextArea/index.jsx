import PropTypes from "prop-types";

const Textarea = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary">
        აღწერა
      </label>
      <textarea
        value={value}
        onChange={onChange}
        className="w-[788px] h-[135px] p-[10px] gap-[10px] rounded-[6px] border border-lightGray"
        style={{ resize: "none", outline: "none" }}
      ></textarea>
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;
