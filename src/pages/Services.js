import { Container, Accordion } from 'react-bootstrap';

function Services() {
  const services = [
    {
      title: "Preventive Care",
      description: "Regular check-ups, cleanings, and oral cancer screenings to maintain optimal oral health.",
      id: "1"
    },
    {
      title: "Restorative Dentistry",
      description: "Fillings, crowns, bridges, and implants to restore function and aesthetics.",
      id: "2"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, teeth whitening, and bonding to enhance your smile's appearance.",
      id: "3"
    },
    {
      title: "Orthodontics",
      description: "Traditional braces and clear aligners to straighten teeth and correct bites.",
      id: "4"
    },
    {
      title: "Emergency Care",
      description: "Immediate treatment for dental emergencies like toothaches, broken teeth, or lost fillings.",
      id: "5"
    }
  ];

  return (
    <section className="py-5" style={{ 
      backgroundColor: '#fffde7',
      minHeight: '100vh'
    }}>
      <Container>
        <h1 className="text-center mb-5">Our Dental Services</h1>
        <p className="lead text-center mb-5">
          Comprehensive dental care for the whole family using the latest techniques and technology.
        </p>
        
        <div className="row">
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" 
              alt="Dental services" 
              className="img-fluid rounded mb-4"
            />
          </div>
          <div className="col-lg-6">
            <Accordion defaultActiveKey="0">
              {services.map((service) => (
                <Accordion.Item eventKey={service.id} key={service.id}>
                  <Accordion.Header>{service.title}</Accordion.Header>
                  <Accordion.Body>
                    {service.description}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;