/* eslint-disable react/prop-types */
const BedroomsFilter = ({ bedrooms, setBedrooms }) => {
  return (
    <div className="flex flex-col p-6">
      <label className="text-base font-firago text-secondary font-medium mb-6">
        საძინებლების რაოდენობა
      </label>
      <input
        type="number"
        className="border border-gray-300 rounded-md p-2 w-[30%]"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      />
    </div>
  );
};

export default BedroomsFilter;
