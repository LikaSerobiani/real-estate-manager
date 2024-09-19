/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EstateListing from "../pages/estates/EstateListing";
import useEstateStore from "../stores/useEstateStore";
import Button from "../components/common/Button";
import CreateAgentModal from "../components/common/Modals/CreateAgent";

export default function Home() {
  const { estates, fetchEstates } = useEstateStore();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddEstate = () => {
    navigate("/estates/create");
  };

  useEffect(() => {
    fetchEstates();
  }, [fetchEstates]);

  return (
    <div className="flex flex-col gap-[77px]">
      <div className="flex gap-[16px]">
        <Button
          title="ლისტინგის დამატება"
          variant="primary"
          onClick={handleAddEstate}
        />
        <Button
          title="აგენტის დამატება"
          variant="secondary"
          onClick={handleShow}
        />
      </div>
      <EstateListing estates={estates} />
      <CreateAgentModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}
