/* eslint-disable react/prop-types */

const AreaRangeFilter = ({ areaRange, setAreaRange }) => {
  const minQuickSelectOptions = [
    { label: "50 მ2", value: 50 },
    { label: "100 მ2", value: 100 },
    { label: "200 მ2", value: 200 },
  ];

  const maxQuickSelectOptions = [
    { label: "50 მ2", value: 50 },
    { label: "100 მ2", value: 100 },
    { label: "200 მ2", value: 200 },
  ];

  const handleMinQuickSelect = (value) => {
    setAreaRange((prev) => ({ ...prev, min: value }));
  };

  const handleMaxQuickSelect = (value) => {
    setAreaRange((prev) => ({ ...prev, max: value }));
  };

  return (
    <div className="flex flex-col p-6">
      <label className="text-base font-firago text-secondary font-medium mb-6">
        ფართობი
      </label>
      <div className="flex space-x-2 mb-6">
        <input
          type="number"
          placeholder="დან"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={areaRange.min}
          onChange={(e) =>
            setAreaRange((prev) => ({ ...prev, min: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="მდე"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={areaRange.max}
          onChange={(e) =>
            setAreaRange((prev) => ({ ...prev, max: e.target.value }))
          }
        />
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex flex-col w-full">
          <div className="flex gap-[1px]">
            <h3 className="text-base font-medium mb-2">მინ. მ</h3>
            <span className="text-[10px] leading-3 font-normal">2</span>
          </div>
          <ul className="space-y-2">
            {minQuickSelectOptions.map(({ label, value }) => (
              <li key={value}>
                <button onClick={() => handleMinQuickSelect(value)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex gap-[1px]">
            <h3 className="text-base font-medium mb-2">მაქს. მ</h3>
            <span className="text-[10px] leading-3 font-normal">2</span>
          </div>
          <ul className="space-y-2">
            {maxQuickSelectOptions.map(({ label, value }) => (
              <li key={value}>
                <button onClick={() => handleMaxQuickSelect(value)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreaRangeFilter;
