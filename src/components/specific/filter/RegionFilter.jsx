/* eslint-disable react/prop-types */
import GroupedCheckbox from "../../common/GroupedCheckbox";

const RegionFilter = ({ setRegions, regions }) => {
  return (
    <div className="flex flex-col p-6 z-[9999] relative">
      <label className="text-base font-firago text-secondary font-medium mb-6">
        რეგიონის მიხედვით
      </label>
      <div className="grid grid-cols-3 gap-y-4 gap-x-[50px]">
        <GroupedCheckbox
          options={regions}
          onChange={(selectedOptions) => setRegions(selectedOptions)}
        />
      </div>
    </div>
  );
};

export default RegionFilter;
