/* eslint-disable react/prop-types */
import React from "react";
import Modal from "./Modal";
import Button from "../Button";

export default function Delete({ showModal, handleClose, handleDelete }) {
  return (
    <Modal
      isModalOpen={showModal}
      onClose={handleClose}
      icon={true}
      padding="58px 107px"
    >
      <div className="flex justify-center flex-col items-center gap-[35px]">
        <span className="text-[20px] leading-[24px] text-secondary font-normal">
          გსურთ წაშალოთ ლისტინგი?
        </span>
        <div className="flex gap-[15px] ">
          <Button title="გაუქმება" variant="secondary" onClick={handleClose} />
          <Button
            title="დადასტურება"
            variant="primary"
            onClick={handleDelete}
          />
        </div>
      </div>
    </Modal>
  );
}
