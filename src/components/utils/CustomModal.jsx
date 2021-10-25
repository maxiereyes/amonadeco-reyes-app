import React from "react";
import { Modal } from "react-bootstrap";
import "../../styles/components/utils/CustomModal.scss";

export const CustomModal = ({ show, status, message, closeModal }) => {
  return (
    <Modal size="md" show={show}>
      <Modal.Body className="customModal">
        <button onClick={closeModal} className="closeButtonModal">
          <i className="fas fa-times"></i>
        </button>

        {status === "error" ? (
          <i className="fas fa-exclamation-triangle customImageModalError"></i>
        ) : (
          <i className="fas fa-check-circle customImageModalSuccess"></i>
        )}
        <p className="customMessageModal">
          {status === "error" ? "Intente nuevamente mas tarde." : message}
        </p>
      </Modal.Body>
    </Modal>
  );
};
