/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Selector from "../../components/common/Selector";
import { fetchCities, fetchRegions } from "../../services/geographicalService";
import useAgentStore from "../../stores/useAgentStore";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import RadioButton from "../../components/common/RadioButton";

export default function EstateCreate() {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const { agents, fetchAgents } = useAgentStore();

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
    const getRegions = async () => {
      try {
        const regionData = await fetchRegions();
        const regionNames = regionData.map((region) => region.name);
        setRegions(regionNames);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };
    getCities();
    getRegions();
    fetchAgents();
  }, []);

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

      <div className="flex gap-[15px]">
        <Button title="გაუქმება" variant="secondary" />
        <Button title="დაამატე ლისტინგი" variant="primary" />
      </div>
    </div>
  );
}
