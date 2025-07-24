import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ViewInfo = () => {
  const navigate = useNavigate();
  const appointmentData = JSON.parse(localStorage.getItem('appointmentData'));

  const handleLogout = () => {
    localStorage.removeItem('patientToken');
    localStorage.removeItem('appointmentData');
    navigate('/login');
  };

  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-5">Your Appointment Info</h1>
        {appointmentData ? (
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card>
                <Card.Body>
                  <h3>Appointment Details</h3>
                  <p><strong>Name:</strong> {appointmentData.firstName} {appointmentData.lastName}</p>
                  <p><strong>Email:</strong> {appointmentData.email}</p>
                  <p><strong>Doctor:</strong> {appointmentData.doctor}</p>
                  <p><strong>Service:</strong> {appointmentData.service}</p>
                  <p><strong>Appointment Date:</strong> {appointmentData.appointmentDate}</p>
                  <p><strong>Appointment Time:</strong> {appointmentData.appointmentTime}</p>
                  <Button onClick={handleLogout} variant="danger">Logout</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <p>No appointment data found. Please make a booking first.</p>
        )}
      </Container>
    </section>
  );
};

export default ViewInfo;
