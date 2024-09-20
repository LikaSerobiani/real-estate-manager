/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import CloseIcon from "../Icons/Close";
import "../../../styles/modal.css";

const Modal = ({ isModalOpen, children, onClose, padding, icon }) => {
  if (isModalOpen !== true) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <section className="modal" onClick={handleBackgroundClick}>
      <article className="modal-content" style={{ padding }}>
        {icon && (
          <div className="close-icon" onClick={onClose}>
            <CloseIcon />
          </div>
        )}
        <div className="w-full h-full">{children}</div>
      </article>
    </section>
  );
};

export default Modal;
