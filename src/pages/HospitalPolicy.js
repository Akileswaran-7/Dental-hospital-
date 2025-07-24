import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import React from 'react';

const HospitalPolicy = () => {
  return (
    <section className="position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Layer with Opacity */}
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61811.jpg?ga=GA1.1.1063160370.1732108304&semt=ais_hybrid&w=740")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>

      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 1, padding: '60px 0' }}>
        <Container
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            padding: '40px',
          }}
        >
          <Row>
            <Col>
              <h2 className="text-center mb-4">Hospital Privacy Policy</h2>

              <Card className="mb-4">
                <Card.Body>
                  <p>
                    We value your privacy. All patient data is securely stored and never shared without explicit consent.
                    Our hospital follows HIPAA (Health Insurance Portability and Accountability Act) standards to protect
                    personal health information.
                  </p>
                  <ul>
                    <li>We collect only necessary patient information for diagnosis and treatment.</li>
                    <li>Your data is encrypted and access-controlled.</li>
                    <li>We do not share data with third parties unless required by law.</li>
                  </ul>
                </Card.Body>
              </Card>

              <h3 className="text-center mb-4">Frequently Asked Questions (FAQ)</h3>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do you protect patient data?</Accordion.Header>
                  <Accordion.Body>
                    We use secure servers, data encryption, and role-based access control. Only authorized staff can
                    access sensitive data.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Can I update my personal information?</Accordion.Header>
                  <Accordion.Body>
                    Yes. Please contact the hospital administration desk or use the patient portal to update your profile.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is my data shared with insurance companies?</Accordion.Header>
                  <Accordion.Body>
                    Only with your consent and for valid medical claims or legal purposes. No other third-party use is
                    allowed.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>How long do you retain medical records?</Accordion.Header>
                  <Accordion.Body>
                    We retain patient records for a minimum of 7 years in accordance with healthcare regulations.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Social Media Links */}
              <div className="text-center mt-5">
                <h5>Follow us on</h5>
                <div style={{ fontSize: '28px' }}>
                  <a
                    href="https://www.instagram.com/your-hospital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3 text-danger"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/your-hospital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3 text-primary"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com/your-hospital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HospitalPolicy;
