import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId='terms-and-condition'>
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(event) => setTcChecked(event.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm;