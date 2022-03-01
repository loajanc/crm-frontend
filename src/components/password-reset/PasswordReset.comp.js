import React from "react";
import propTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Button type="submit">Reset Password</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#" onClick={() => formSwitcher("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnResetSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
};
