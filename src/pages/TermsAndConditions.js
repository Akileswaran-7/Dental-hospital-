import { Container, Row, Col } from 'react-bootstrap';

const TermsAndConditions = () => {
  return (
    <section className="py-5 position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Image Layer */}
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/doctors-stethoscope-white-background_53876-146858.jpg?ga=GA1.1.1063160370.1732108304&semt=ais_hybrid&w=740")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.9,
          zIndex: 0,
        }}
      ></div>

      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <h1 className="text-center mb-5">Terms and Conditions</h1>

          <Row>
            <Col lg={12}>
              <div className="terms-content">
                <h3 className="mb-4">Welcome to SmileCare Hospital</h3>

                <p>
                  These terms and conditions outline the rules and regulations for the use of SmileCare Hospital's services.
                  By accessing and using our website, you accept and agree to be bound by the following terms and conditions.
                  Please read them carefully.
                </p>

                <h4>1. Acceptance of Terms</h4>
                <p>
                  By accessing and using the services provided by SmileCare Hospital, you agree to comply with and be bound by
                  these terms and conditions, as well as any other rules or guidelines that may be applicable to specific
                  services or features.
                </p>

                <h4>2. Services Provided</h4>
                <p>
                  SmileCare Hospital offers a wide range of medical services, including but not limited to dental checkups,
                  cosmetic procedures, tooth extractions, and dental cleaning. The hospital reserves the right to add, remove,
                  or modify any services as deemed necessary.
                </p>

                <h4>3. Appointment Booking</h4>
                <p>
                  All appointments should be scheduled in advance through our official website or by contacting our office.
                  Any cancellation or rescheduling of appointments must be done at least 24 hours in advance to avoid
                  cancellation fees.
                </p>

                <h4>4. Patient Responsibilities</h4>
                <p>
                  Patients are responsible for providing accurate and complete information during the booking process,
                  including personal and medical details. Failure to do so may result in delays or denial of services.
                </p>

                <h4>5. Payment</h4>
                <p>
                  All services provided by SmileCare Hospital are subject to the applicable charges. Payment is due at the
                  time of service unless otherwise agreed upon. We accept payments through various methods including credit
                  cards, debit cards, and insurance coverage (where applicable).
                </p>

                <h4>6. Privacy Policy</h4>
                <p>
                  SmileCare Hospital is committed to protecting your privacy. We collect and store personal data only as necessary
                  to provide services and communicate with patients. For more information, please review our Privacy Policy.
                </p>

                <h4>7. Limitation of Liability</h4>
                <p>
                  SmileCare Hospital is not liable for any damages arising from the use of our services, including but not
                  limited to, any direct, indirect, incidental, special, or consequential damages. This includes any medical
                  errors, delays, or disruptions in services.
                </p>

                <h4>8. Modifications to Terms</h4>
                <p>
                  SmileCare Hospital reserves the right to modify, amend, or update these terms and conditions at any time.
                  Any changes will be reflected on this page, and it is your responsibility to review the terms regularly.
                </p>

                <h4>9. Governing Law</h4>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the country or region
                  where SmileCare Hospital operates. Any disputes will be subject to the exclusive jurisdiction of the courts
                  located within that region.
                </p>

                <h4>10. Contact Us</h4>
                <p>
                  If you have any questions regarding these terms and conditions or need further information, feel free to
                  contact us at:
                </p>
                <p>
                  <strong>Email:</strong> info@smilecare.com <br />
                  <strong>Phone:</strong> (123) 456-7890 <br />
                  <strong>Address:</strong> 123 Dental Street, Smile City, SC 12345
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TermsAndConditions;
