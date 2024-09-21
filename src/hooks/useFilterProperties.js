import { useMemo } from "react";

const useFilterProperties = (estates, filterCriteria) => {
  return useMemo(() => {
    if (!filterCriteria) return [...estates];

    const { priceRange, areaRange, selectedRegions, bedrooms } = filterCriteria;

    const filteredData = estates.filter((estate) => {
      const matchesPrice =
        estate.price >= priceRange.min && estate.price <= priceRange.max;
      const matchesArea =
        estate.area >= areaRange.min && estate.area <= areaRange.max;
      const matchesRegions = selectedRegions.includes(estate.city.region_id);
      const matchesBedrooms = Number(estate.bedrooms) === Number(bedrooms);

      return matchesPrice || matchesArea || matchesRegions || matchesBedrooms;
    });

    return filteredData;
  }, [estates, filterCriteria]);
};

export default useFilterProperties;
