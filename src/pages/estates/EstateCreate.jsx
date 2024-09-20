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
        setCities(cityData.map((city) => city.name));
        setRegions(regionData.map((region) => region.name));
        fetchAgents();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchAgents]);

  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Selector
        label="ქალაქი"
        options={cities}
        selectedOption={selectedCity}
        onSelect={setSelectedCity}
      />
      <Selector
        label="რეგიონი"
        options={regions}
        selectedOption={selectedRegion}
        onSelect={setSelectedRegion}
      />
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
