import { Card, Badge, Button } from 'react-bootstrap';

const DoctorCard = ({ name, specialty, experience, image, isSelected, onSelect }) => {
  return (
    <Card 
      className={`h-100 shadow-sm ${isSelected ? 'border-primary border-2' : ''}`}
      onClick={onSelect}
      style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
    >
      <div className="position-relative">
        <Card.Img variant="top" src={image} alt={name} />
        {isSelected && (
          <Badge pill bg="primary" className="position-absolute top-0 end-0 m-2">
            <i className="bi bi-check-lg"></i>
          </Badge>
        )}
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
        <Card.Text>
          <small className="text-muted">{experience} years of experience</small>
        </Card.Text>
        {isSelected && (
          <Button variant="outline-primary" size="sm" className="w-100">
            <i className="bi bi-calendar-check me-2"></i>
            Book Now
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
