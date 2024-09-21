/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EstateListing from "../pages/estates/EstateListing";
import useEstateStore from "../stores/useEstateStore";
import useGeographicalStore from "../stores/useGeographicalStore";
import Button from "../components/common/Button";
import CreateAgentModal from "../components/common/Modals/CreateAgent";

import FilterComponent from "../components/specific/filter/index";
import useFilterProperties from "../hooks/useFilterProperties";
import Plus from "../components/common/Icons/Plus";

export default function Home() {
  const { estates, fetchEstates } = useEstateStore();
  const { regions, fetchRegions } = useGeographicalStore();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [filteredEstates, setFilteredEstates] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddEstate = () => {
    navigate("/estates/create");
  };

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
  };

  const filteredProperties = useFilterProperties(estates, filterCriteria);

  useEffect(() => {
    fetchEstates();
    fetchRegions();
  }, [fetchEstates, fetchRegions]);

  useEffect(() => {
    setFilteredEstates(filteredProperties);
  }, [filteredProperties]);

  return (
    <div>
      <div className="flex justify-between items-start w-full h-full pb-8">
        <FilterComponent onFilter={handleFilter} regions={regions} />
        <div className="flex items-center gap-4 justify-end w-[inherit]">
          <Button
            title="ლისტინგის დამატება"
            variant="primary"
            onClick={handleAddEstate}
          >
            <Plus color="#FFFFFF" />
          </Button>
          <Button
            title="აგენტის დამატება"
            variant="secondary"
            onClick={handleShow}
          >
            <Plus color="#F93B1D" />
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-full">
        <EstateListing
          estates={filteredEstates.length ? filteredEstates : estates}
        />
      </div>

      <CreateAgentModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}
