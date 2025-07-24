import { Container, Row, Col,  Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

function Home() {
  // Define services array here
  const services = [
    {
      title: "General Dentistry",
      description: "Routine check-ups, cleanings, and fillings to maintain your oral health.",
      icon: "bi-tooth"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and other treatments to enhance your smile.",
      icon: "bi-stars"
    },
    {
      title: "Orthodontics",
      description: "Braces and aligners to straighten teeth and correct bites.",
      icon: "bi-braces"
    }
  ];

  return (
    <>
      <HeroSection />
      
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Accordion defaultActiveKey="0" className="mb-5">
            {services.map((service, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <i className={`bi ${service.icon} me-3 text-primary`}></i>
                  {service.title}
                </Accordion.Header>
                <Accordion.Body>
                  {service.description}
                  <div className="mt-3">
                    <Link to="/services" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2>Why Choose SmileCare Dental?</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Experienced and caring dental professionals
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  State-of-the-art technology and equipment
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Comfortable and relaxing environment
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Personalized treatment plans
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" 
                alt="Dental clinic" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;