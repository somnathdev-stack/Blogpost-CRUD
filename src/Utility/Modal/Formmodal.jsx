import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Formmodal = ({ children, onClose,  title ,show, dataPost}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    dataPost();
    onClose(); // Close the modal after submission
  };
  return (
    <Modal show={show} onHide={onClose}  centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>{children}</Form>
      </Modal.Body>
    </Modal>
  );
};

export default Formmodal;
