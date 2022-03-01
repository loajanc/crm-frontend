import React from "react";
import propTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  pass,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
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
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="password"
                required
              />
            </Form.Group>
            <Button type="submit">로그인</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("rest")}>
            비밀번호를 잊어버리셨나요?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  pass: propTypes.string.isRequired,
};
