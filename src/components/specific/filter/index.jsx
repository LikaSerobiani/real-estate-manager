/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PriceRangeFilter from "./PriceRangeFilter";
import AreaRangeFilter from "./AreaRangeFilter";
import RegionFilter from "./RegionFilter";
import BedroomsFilter from "./BedroomsFilter";
import Dropdown from "../../common/Dropdown";
import Button from "../../common/Button";
import CloseIcon from "../../common/Icons/Close";

const FilterComponent = ({ onFilter, regions }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("priceMin") || "",
    max: searchParams.get("priceMax") || "",
  });
  const [areaRange, setAreaRange] = useState({
    min: searchParams.get("areaMin") || "",
    max: searchParams.get("areaMax") || "",
  });
  const [selectedRegions, setSelectedRegions] = useState(
    searchParams.getAll("region") || []
  );
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");

  useEffect(() => {
    handleFilter();
  }, [priceRange, areaRange, selectedRegions, bedrooms]);

  const handleFilter = () => {
    onFilter({ priceRange, areaRange, selectedRegions, bedrooms });

    const params = {};
    if (priceRange.min) params.priceMin = priceRange.min;
    if (priceRange.max) params.priceMax = priceRange.max;
    if (areaRange.min) params.areaMin = areaRange.min;
    if (areaRange.max) params.areaMax = areaRange.max;
    if (selectedRegions) params.region = selectedRegions;
    if (bedrooms) params.bedrooms = bedrooms;
    setSearchParams(params);
  };

  const handleRemoveFilter = (filterType) => {
    switch (filterType) {
      case "priceRange":
        setPriceRange({ min: "", max: "" });
        break;
      case "areaRange":
        setAreaRange({ min: "", max: "" });
        break;
      case "region":
        setSelectedRegions("");
        break;
      case "bedrooms":
        setBedrooms("");
        break;
      default:
        break;
    }
  };

  const handleClearAllFilters = () => {
    setPriceRange({ min: "", max: "" });
    setAreaRange({ min: "", max: "" });
    setSelectedRegions("");
    setBedrooms("");
    setSearchParams({});
  };

  const renderSelectedFilters = () => {
    const selectedFilters = [];

    if (priceRange.min || priceRange.max) {
      selectedFilters.push(
        <button
          key="priceRange"
          className="text-secondary px-3 py-1 rounded-[43px] border-solid border-[#DBDBDB] border flex items-center gap-1"
          onClick={() => handleRemoveFilter("priceRange")}
        >
          {priceRange.min ? `მინ. ${priceRange.min}` : ""} -{" "}
          {priceRange.max ? `მაქს. ${priceRange.max}` : ""} <CloseIcon />
        </button>
      );
    }

    if (areaRange.min || areaRange.max) {
      selectedFilters.push(
        <button
          key="areaRange"
          className="text-secondary px-3 py-1 rounded-[43px] border-solid border-[#DBDBDB] border flex items-center gap-1"
          onClick={() => handleRemoveFilter("areaRange")}
        >
          {areaRange.min ? `მინ. ${areaRange.min}` : ""} -{" "}
          {areaRange.max ? `მაქს. ${areaRange.max}` : ""} <CloseIcon />
        </button>
      );
    }
    if (selectedRegions) {
      selectedRegions.forEach((regionId) => {
        const regionName = regions.find(
          (r) => r.id === parseInt(regionId)
        )?.name;
        selectedFilters.push(
          <button
            key={`region-${regionId}`}
            className="text-secondary px-3 py-1 rounded-[43px] border-solid border-[#DBDBDB] border flex items-center font-firago gap-1"
            onClick={() => handleRemoveFilter("region", regionId)}
          >
            {regionName}
            <CloseIcon />
          </button>
        );
      });
    }

    if (bedrooms) {
      selectedFilters.push(
        <button
          key="bedrooms"
          className="text-secondary px-3 py-1 rounded-[43px] border-solid border-[#DBDBDB] border font-firago flex items-center gap-1"
          onClick={() => handleRemoveFilter("bedrooms")}
        >
          {bedrooms} <CloseIcon />
        </button>
      );
    }

    return selectedFilters.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {selectedFilters}
        <button
          onClick={handleClearAllFilters}
          className="text-secondary text-sm font-medium"
        >
          გასუფთავება
        </button>
      </div>
    ) : null;
  };

  const applyButtonComponent = (closeDropdown) => (
    <Button
      title="არჩევა"
      variant="primary"
      onClick={() => {
        handleFilter();
        closeDropdown();
      }}
    />
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 border-solid border border-border rounded-md w-max p-[6px]">
        <Dropdown title="რეგიონი" applyButtonComponent={applyButtonComponent}>
          <RegionFilter
            selectedRegions={selectedRegions}
            setRegions={setSelectedRegions}
            regions={regions}
          />
        </Dropdown>
        <Dropdown
          title="საფასო კატეგორია"
          applyButtonComponent={applyButtonComponent}
        >
          <PriceRangeFilter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </Dropdown>
        <Dropdown title="ფართობი" applyButtonComponent={applyButtonComponent}>
          <AreaRangeFilter areaRange={areaRange} setAreaRange={setAreaRange} />
        </Dropdown>
        <Dropdown
          title="საძინებლების რაოდენობა"
          applyButtonComponent={applyButtonComponent}
        >
          <BedroomsFilter bedrooms={bedrooms} setBedrooms={setBedrooms} />
        </Dropdown>
      </div>
      <div className="gap-1 flex max-w-[90%]">{renderSelectedFilters()}</div>
    </div>
  );
};

export default FilterComponent;
