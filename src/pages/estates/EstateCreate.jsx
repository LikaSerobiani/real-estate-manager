import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { listingValidationSchema } from "../../validation/listingValidationSchema";
import { useNavigate } from "react-router-dom";
import Selector from "../../components/common/Selector";
import { fetchCities, fetchRegions } from "../../services/geographicalService";
import useEstateStore from "../../stores/useEstateStore";
import Button from "../../components/common/Button";
import RadioButton from "../../components/common/RadioButton";
import FileUploader from "../../components/common/FileUploader";
import useAgentStore from "../../stores/useAgentStore";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";

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
  const { addEstate } = useEstateStore();
  const navigate = useNavigate();

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

  const handlePropertyTypeChange = (value, setFieldValue) => {
    setPropertyType(value);
    setFieldValue("is_rental", value === PropertyTypes.RENTAL ? 1 : 0);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addEstate(values);
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-firago font-bold text-[32px] leading-[38.4px] text-secondary text-center mb-[61px]">
        ლისტინგის დამატება
      </h2>
      <Formik
        initialValues={{
          address: "",
          image: null,
          region_id: "",
          description: "",
          city_id: "",
          zip_code: "",
          price: "",
          area: "",
          bedrooms: "",
          is_rental: 0,
          agent_id: "",
        }}
        validationSchema={listingValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form className="flex flex-col gap-[80px]">
            <div className="flex flex-col gap-2">
              <p className="font-helvetica text-[16px] uppercase leading-[19.54px]">
                გარიგების ტიპი
              </p>
              <div className="flex gap-12">
                {Object.entries(PropertyTypes).map(([key, value]) => (
                  <RadioButton
                    key={key}
                    name="propertyType"
                    value={value}
                    checked={propertyType === value}
                    onChange={() =>
                      handlePropertyTypeChange(value, setFieldValue)
                    }
                    label={key === "RENTAL" ? "ქირავდება" : "იყიდება"}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[22px]">
              <p className="font-helvetica text-[16px] uppercase leading-[19.54px]">
                მდებარეობა
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <Input
                  label="მისამართი"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.address}
                  touched={touched.address}
                  initialMessage="მინიმუმ ორი სიმბოლო"
                />
                <Input
                  label="საფოსტო ინდექსი"
                  id="zip_code"
                  name="zip_code"
                  value={values.zip_code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.zip_code}
                  touched={touched.zip_code}
                  initialMessage="მხოლოდ რიცხვები"
                />
                <Selector
                  label="რეგიონი"
                  name="region_id"
                  id="region_id"
                  options={regions.map((region) => region.name)}
                  selectedOption={selectedRegion?.name}
                  onSelect={(name) => {
                    const selected = regions.find(
                      (region) => region.name === name
                    );
                    setSelectedRegion(selected);
                    setFieldValue("region_id", selected?.id);
                  }}
                  error={touched.region_id && errors.region_id}
                />
                {selectedRegion && (
                  <Selector
                    label="ქალაქი"
                    name="city_id"
                    id="city_id"
                    options={cities.map((city) => city.name)}
                    selectedOption={selectedCity?.name}
                    onSelect={(name) => {
                      const selected = cities.find(
                        (city) => city.name === name
                      );
                      setSelectedCity(selected);
                      setFieldValue("city_id", selected?.id);
                    }}
                    error={touched.city_id && errors.city_id}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[22px]">
              <p className="font-helvetica text-[16px] uppercase leading-[19.54px]">
                ბინის დეტალები
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <Input
                  label="ფასი"
                  id="price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.price}
                  touched={touched.price}
                  initialMessage="მხოლოდ რიცხვები"
                />
                <Input
                  label="ფართობი"
                  id="area"
                  name="area"
                  type="area"
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.area}
                  touched={touched.area}
                  initialMessage="მხოლოდ რიცხვები"
                />
              </div>
              <Input
                label="საძინებლების რაოდენობა"
                id="bedrooms"
                name="bedrooms"
                value={values.bedrooms}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.bedrooms}
                touched={touched.bedrooms}
                initialMessage="მხოლოდ რიცხვები"
              />
              <TextArea
                label="აღწერა"
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.description}
                touched={touched.description}
                initialMessage="მინიმუმ 5 სიტყვა"
              />
              <FileUploader
                onFileChange={(file) => setFieldValue("image", file)}
                error={touched.image && errors.image}
              />
            </div>

            <div className="flex flex-col gap-[15px]">
              <p className="font-helvetica text-[16px] uppercase leading-[19.54px]">
                აგენტი
              </p>
              <Selector
                label="აგენტი"
                name="agent_id"
                id="agent_id"
                options={agents.map((agent) => agent.name)}
                selectedOption={selectedAgent ? selectedAgent.name : ""}
                onSelect={(name) => {
                  const selected = agents.find((agent) => agent.name === name);
                  setSelectedAgent(selected);
                  setFieldValue("agent_id", selected?.id);
                }}
                error={touched.agent_id && errors.agent_id}
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <Button
                title="გაუქმება"
                variant="secondary"
                onClick={() => navigate("/")}
              />
              <Button
                title="დაამატე ლისტინგი"
                variant="primary"
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
