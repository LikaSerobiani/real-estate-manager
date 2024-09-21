/* eslint-disable react/prop-types */

const PriceRangeFilter = ({ priceRange, setPriceRange }) => {
  const minQuickSelectOptions = [
    { label: "50,000 \u20BE", value: 50000 },
    { label: "100,000 \u20BE", value: 100000 },
    { label: "200,000 \u20BE", value: 200000 },
  ];

  const maxQuickSelectOptions = [
    { label: "50,000 \u20BE", value: 50000 },
    { label: "100,000 \u20BE", value: 100000 },
    { label: "200,000 \u20BE", value: 200000 },
  ];

  const handleMinQuickSelect = (value) => {
    setPriceRange((prev) => ({ ...prev, min: value }));
  };

  const handleMaxQuickSelect = (value) => {
    setPriceRange((prev) => ({ ...prev, max: value }));
  };

  return (
    <div className="flex flex-col p-6">
      <label className="text-base font-firago text-secondary font-medium mb-6">
        ფასის მიხედვით
      </label>
      <div className="flex space-x-2 mb-6">
        <input
          type="number"
          placeholder="დან"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, min: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="მდე"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, max: e.target.value }))
          }
        />
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex flex-col w-full">
          <h3 className="text-base font-medium mb-2">მინ. ფასი</h3>
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
          <h3 className="text-base font-medium mb-2">მაქს. ფასი</h3>
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

export default PriceRangeFilter;
