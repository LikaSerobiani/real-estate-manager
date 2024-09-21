import React, { useState, useEffect } from "react";
import Selector from "../../components/common/Selector";
import { fetchCities, fetchRegions } from "../../services/geographicalService";
import useAgentStore from "../../stores/useAgentStore";
import Button from "../../components/common/Button";
import RadioButton from "../../components/common/RadioButton";

const PropertyTypes = {
  SALE: "0",
  RENTAL: "1",
};

export default function EstateCreate() {
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [propertyType, setPropertyType] = useState(PropertyTypes.SALE);

  const { agents, fetchAgents } = useAgentStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cityData, regionData] = await Promise.all([
          fetchCities(),
          fetchRegions(),
        ]);
        setAllCities(cityData);
        setRegions(regionData);
        fetchAgents();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchAgents]);

  useEffect(() => {
    if (selectedRegion) {
      const filteredCities = allCities.filter(
        (city) => city.region_id === selectedRegion.id
      );
      setCities(filteredCities);
      setSelectedCity(null);
    } else {
      setCities([]);
    }
  }, [selectedRegion, allCities]);

  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Selector
        label="რეგიონი"
        options={regions.map((region) => region.name)}
        selectedOption={selectedRegion?.name}
        onSelect={(name) =>
          setSelectedRegion(regions.find((region) => region.name === name))
        }
      />
      {selectedRegion && (
        <Selector
          label="ქალაქი"
          options={cities.map((city) => city.name)}
          selectedOption={selectedCity?.name}
          onSelect={(name) =>
            setSelectedCity(cities.find((city) => city.name === name))
          }
        />
      )}
      <Selector
        label="აგენტი"
        options={agents.map((agent) => agent.name)}
        selectedOption={selectedAgent}
        onSelect={setSelectedAgent}
      />

      <div className="flex gap-4 mt-4">
        {Object.entries(PropertyTypes).map(([key, value]) => (
          <RadioButton
            key={key}
            name="propertyType"
            value={value}
            checked={propertyType === value}
            onChange={() => handlePropertyTypeChange(value)}
            label={key === "RENTAL" ? "ქირავდება" : "იყიდება"}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <Button title="გაუქმება" variant="secondary" />
        <Button
          title="დაამატე ლისტინგი"
          variant="primary"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
