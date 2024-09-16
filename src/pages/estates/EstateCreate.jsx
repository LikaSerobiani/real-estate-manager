/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Selector from "../../components/common/Selector";
import { fetchCities } from "../../services/geographicalService";

export default function EstateCreate() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const getCities = async () => {
      try {
        const cityData = await fetchCities();
        const cityNames = cityData.map((city) => city.name);
        setCities(cityNames);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    getCities();
  }, []);

  return (
    <div>
      <Selector
        options={cities}
        selectedOption={selectedCity}
        onSelect={setSelectedCity}
      />
    </div>
  );
}
