import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5>SmileCare Dental</h5>
            <p>
              Providing exceptional dental care with the latest technology and a compassionate approach.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/doctors" className="text-white text-decoration-none">Our Doctors</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Info Section */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              123 Dental Street<br />
              Smile City, SC 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@smilecare.com
            </address>

            {/* Social Media Icons */}
            <div className="mt-3">
              <a href="https://www.facebook.com/your-hospital" target="_blank" rel="noopener noreferrer" className="me-3 text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/your-hospital" target="_blank" rel="noopener noreferrer" className="me-3 text-white fs-5">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/your-hospital" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaXTwitter />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} SmileCare Dental. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
