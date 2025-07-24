import { useState } from 'react';
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Dentistry",
      experience: 12,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Orthodontics",
      experience: 8,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Dentistry",
      experience: 10,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Oral Surgery",
      experience: 15,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54"
    }
  ];

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center mb-5">Our Expert Dentists</h1>
        <p className="lead text-center mb-5">
          Click on a doctor to select and book an appointment
        </p>

        {showAlert && selectedDoctor && (
          <Alert 
            variant="success" 
            className="text-center"
            onClose={() => setShowAlert(false)} 
            dismissible
          >
            You selected <strong>{selectedDoctor.name}</strong>. 
            <Button 
              variant="link" 
              as={Link} 
              to="/contact" 
              className="p-0 ms-2"
            >
              Book an appointment now
            </Button>
          </Alert>
        )}

        <Row>
          {doctors.map((doctor, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <DoctorCard 
                {...doctor}
                isSelected={selectedDoctor?.name === doctor.name}
                onSelect={() => handleDoctorSelect(doctor)}
              />
            </Col>
          ))}
        </Row>

        {selectedDoctor && (
          <div className="text-center mt-4">
            <h4>Selected: {selectedDoctor.name}</h4>
            <p className="text-muted">{selectedDoctor.specialty}</p>
            <Form>
              <Form.Group controlId="appointmentDate" className="mb-3">
                <Form.Label>Choose Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="appointmentTime" className="mb-3">
                <Form.Label>Choose Appointment Time</Form.Label>
                <Form.Control
                  type="time"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  required
                />
              </Form.Group>

              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg"
                state={{ selectedDoctor, appointmentDate, appointmentTime }}
                disabled={!appointmentDate || !appointmentTime}
              >
                Book with {selectedDoctor.name.split(' ')[1]}
              </Button>
            </Form>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Doctors;
