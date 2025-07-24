import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDoctor = location.state?.selectedDoctor;
  const appointmentDate = location.state?.appointmentDate;
  const appointmentTime = location.state?.appointmentTime;

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;
    const service = e.target[4].value;
    const message = e.target[5].value;

    const appointmentData = {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      doctor: selectedDoctor?.name || 'Unknown',
      appointmentDate,
      appointmentTime,
    };

    localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
    navigate('/view-info');
  };

  return (
    <section className="py-5 position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Layer */}
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/copy-space-medical-desk-with-stethoscope_23-2148519746.jpg?ga=GA1.1.1063160370.1732108304&semt=ais_hybrid&w=740")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6,
          zIndex: 0,
        }}
      ></div>

      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <h1 className="text-center mb-5">Contact Us</h1>

          {selectedDoctor && (
            <Alert variant="info" className="text-center mb-5">
              You're booking an appointment with <strong>{selectedDoctor.name}</strong>
              <br />
              <strong>Appointment Date:</strong> {appointmentDate} <br />
              <strong>Appointment Time:</strong> {appointmentTime}
            </Alert>
          )}

          <Row>
            <Col lg={6} className="mb-5 mb-lg-0">
              <h3 className="mb-4">Get in Touch</h3>
              <address>
                <p>
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                  123 Dental Street, Smile City, SC 12345
                </p>
                <p>
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>
                  (123) 456-7890
                </p>
                <p>
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  info@smilecare.com
                </p>
              </address>

              <h4 className="mt-5 mb-3">Working Hours</h4>
              <ul className="list-unstyled">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </Col>

            <Col lg={6}>
              <h3 className="mb-4">Book an Appointment</h3>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6} className="mb-3 mb-md-0">
                    <Form.Control type="text" placeholder="First Name" required />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="text" placeholder="Last Name" required />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="tel" placeholder="Phone Number" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select required>
                    <option value="">Select Service</option>
                    <option>General Checkup</option>
                    <option>Dental Cleaning</option>
                    <option>Tooth Extraction</option>
                    <option>Cosmetic Procedure</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Message (Optional)" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Submit Request
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
