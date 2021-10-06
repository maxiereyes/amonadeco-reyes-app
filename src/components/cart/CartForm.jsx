import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  ValidationConfirmEmail,
  ValidationEmail,
  ValidationPhone,
} from "../../helpers/validations";
import { useCustomForm } from "../../hooks/useCustomForm";
import { Title } from "../utils/Title";

export const CartForm = ({ handleBuyOrder }) => {
  const { formState, handleChange } = useCustomForm({
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });
  const [errorForm, setErrorForm] = useState();

  const validationForm = () => {
    let errors = {};
    Object.keys(formState).forEach((key) => {
      if (formState[key] === "") {
        errors[key] = "Requerido";
      } else {
        if (key === "email") {
          if (!ValidationEmail(formState[key])) errors[key] = `Email invalido`;
        }

        if (key === "emailConfirm") {
          if (!ValidationEmail(formState[key])) {
            errors[key] = `Email invalido`;
          } else {
            if (!ValidationConfirmEmail(formState["email"], formState[key]))
              errors[key] = `Emails diferentes`;
          }
        }

        if (key === "phone") {
          if (!ValidationPhone(formState[key]))
            errors[key] = `Telefono invalido`;
        }
      }
    });
    setErrorForm(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationForm();
    if (errorForm && Object.keys(errorForm).length === 0) {
      handleBuyOrder({
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
      });
    }
  };

  return (
    <div className="my-2">
      <Title text="Generar Orden" />
      <Form onSubmit={handleSubmit}>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={12} className="my-2">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.name}
                name="name"
              />
            </Form.Group>
            <Form.Label className="text-danger my-1 mx-1">
              {errorForm && errorForm.name ? errorForm.name : ""}
            </Form.Label>
          </Col>
          <Col xs={12} className="my-2">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Telefono"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.phone}
                name="phone"
              />
            </Form.Group>
            <Form.Label className="text-danger my-1 mx-1">
              {errorForm && errorForm.phone ? errorForm.phone : ""}
            </Form.Label>
          </Col>
          <Col xs={12} className="my-2">
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.email}
                name="email"
              />
            </Form.Group>
            <Form.Label className="text-danger my-1 mx-1">
              {errorForm && errorForm.email ? errorForm.email : ""}
            </Form.Label>
          </Col>
          <Col xs={12} className="my-2">
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Confirmar Email"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.emailConfirm}
                name="emailConfirm"
              />
            </Form.Group>
            <Form.Label className="text-danger my-1 mx-1">
              {errorForm && errorForm.emailConfirm
                ? errorForm.emailConfirm
                : ""}
            </Form.Label>
          </Col>
          <Col className="my-4">
            <button type="submit" className="btn btn-dark w-100">
              Comprar
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
