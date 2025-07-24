import { Card } from 'react-bootstrap';
import { useState } from 'react';
import './DiseaseCard.css';

const DiseaseCard = ({ disease }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`disease-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="card-front">
        <Card className="h-100">
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="fw-bold text-center">
              {disease.name}
            </Card.Title>
            <Card.Text className="text-muted text-center mt-2">
              <small>Hover to learn more</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
      <div className="card-back">
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="fw-bold text-center mb-3">
              {disease.name}
            </Card.Title>
            <Card.Text className="text-muted mb-3">
              {disease.description}
            </Card.Text>
            
            <div className="mb-3">
              <h6 className="text-uppercase text-secondary">Causes:</h6>
              <ul className="ps-3">
                {disease.causes.map((cause, i) => (
                  <li key={i}>{cause}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DiseaseCard;
