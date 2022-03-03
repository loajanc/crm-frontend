import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply tour message here or update the ticket</Form.Text>
      <Form.Control
        value={msg}
        onChange={handleOnChange}
        name="detail"
        row="5"
        as="textarea"
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
