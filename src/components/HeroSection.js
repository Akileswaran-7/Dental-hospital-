import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section text-white py-5">
      <Container className="py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">Your Perfect Smile Starts Here</h1>
            <p className="lead mb-4">
              At SmileCare Dental, we provide the highest quality dental care with a personal touch. 
              Our state-of-the-art facility and expert team ensure your comfort and satisfaction.
            </p>
            <div className="d-flex gap-3">
              <Button as={Link} to="/doctors" variant="primary" size="lg">
                Meet Our Doctors
              </Button>
              <Button as={Link} to="/contact" variant="outline-light" size="lg">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;