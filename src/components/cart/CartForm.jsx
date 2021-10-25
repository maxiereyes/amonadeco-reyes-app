import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  ValidationConfirmEmail,
  ValidationEmail,
  ValidationPhone,
} from "../../helpers/validations";
import { useCustomForm } from "../../hooks/useCustomForm";
import "../../styles/components/cart/CartForm.scss";

export const CartForm = ({ handleBuyOrder, loading }) => {
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
      <Form onSubmit={handleSubmit}>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={12} className="my-2">
            <Form.Group>
              <input
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.name}
                name="name"
                className="customInput"
              />
            </Form.Group>
            <Form.Label className="labelError">
              {errorForm && errorForm.name ? errorForm.name : ""}
            </Form.Label>
          </Col>
          <Col xs={12} className="my-2">
            <Form.Group>
              <input
                type="text"
                placeholder="Telefono"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.phone}
                name="phone"
                className="customInput"
              />
            </Form.Group>
            <Form.Label className="labelError">
              {errorForm && errorForm.phone ? errorForm.phone : ""}
            </Form.Label>
          </Col>
          <Col xs={12} className="my-2">
            <Form.Group>
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.email}
                name="email"
                className="customInput"
              />
            </Form.Group>
            <Form.Label className="labelError">
              {errorForm && errorForm.email ? errorForm.email : ""}
            </Form.Label>
          </Col>
          <Col xs={12} className="my-2">
            <Form.Group>
              <input
                type="email"
                placeholder="Confirmar Email"
                onChange={handleChange}
                onBlur={validationForm}
                value={formState.emailConfirm}
                name="emailConfirm"
                className="customInput"
              />
            </Form.Group>
            <Form.Label className="labelError">
              {errorForm && errorForm.emailConfirm
                ? errorForm.emailConfirm
                : ""}
            </Form.Label>
          </Col>
        </Row>
        <button type="submit" className="buttonOrder">
          {loading ? (
            <span
              className="mx-2 spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Generar Orden"
          )}
        </button>
      </Form>
    </div>
  );
};
