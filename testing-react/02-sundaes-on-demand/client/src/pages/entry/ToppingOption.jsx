import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function ToppingOption({ name, imagePath, updateItemCount }) {
  const handleChange = (event) => {
    updateItemCount(name, event.target.Checked ? 1 : 0);
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img style={{ width: '75%' }} alt={`${name} topping`} src={`http://localhost:3030/${imagePath}`} />
      <Form.Group controlId={`${name}-topping-check`}>
        <Form.Check
          label={name}
          type="checkbox"
          onChange={handleChange}
        />
      </Form.Group>
    </Col>
  )
}

export default ToppingOption;
