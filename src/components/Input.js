import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

export const Input = ({ addTransaction }) => {
  const [description, setDescription] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setDescription({
      ...description,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTransaction(description);
  };

  return (
    <Form onSubmit={handleOnSubmit} className="border p-3 rounded shadow-lg">
      <Row className="gap-2">
        <Col md={2}>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">Type </option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Control
            type="date"
            name="date"
            onChange={handleOnChange}
            required
          />
        </Col>

        <Col md={4}>
          <Form.Control
            name="title"
            placeholder="Shopping"
            onChange={handleOnChange}
            required
          />
        </Col>

        <Col md={2}>
          <Form.Control
            name="amount"
            type="number"
            placeholder="233"
            onChange={handleOnChange}
            required
          />
        </Col>

        <Col md={2}>
          <Button type="submit">
            <i className="fa-solid fa-plus"></i> Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
