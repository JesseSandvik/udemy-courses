import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
          <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to <OverlayTrigger placement='right' overlay={popover}><span style={{ color: 'blue' }}>Terms and Conditions</span></OverlayTrigger>
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