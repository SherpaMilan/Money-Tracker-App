import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap";
export const Input = () => {
  const [description, setDescription] = useState("");
  const [amount, SetAmount] = useState(0);

  console.log(description);
  console.log(amount);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleInvChar = (e) => {
    let invalidChar = ["+", "-", "e", "E"];

    invalidChar.includes(e.key) && e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <label htmlFor="0" class="form-label">
              Date
            </label>
            <input
              type="date"
              class="form-control"
              id="0"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter date"
            ></input>
          </Col>
          <Col>
            <label for="1" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="1"
              value={amount}
              onChange={(e) => SetAmount(e.target.value)}
              placeholder="add your transactions"
            ></input>
          </Col>
          <Col>
            <label class="form-label">Amount</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter the amoount"
            ></input>
          </Col>
        </Row>
      </Form>

      <div className=" d-flex mt-3 justify-content-center">
        <button type="button" class="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};
