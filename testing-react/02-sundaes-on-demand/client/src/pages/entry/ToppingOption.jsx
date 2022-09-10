import Col from "react-bootstrap/Col";

function ToppingOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img style={{ width: '75%' }} alt={`${name} topping`} src={`http://localhost:3030/${imagePath}`} />
    </Col>
  )
}

export default ToppingOption;
