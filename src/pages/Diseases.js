import { Container, Row, Col } from 'react-bootstrap';
import DiseaseCard from '../components/DiseaseCard';
import './Diseases.css';

const Diseases = () => {
  const dentalDiseases = [
    {
      name: "Tooth Decay",
      description: "Destruction of tooth enamel leading to cavities.",
      causes: [
        "Bacteria in plaque",
        "Frequent snacking on sugary foods",
        "Poor oral hygiene"
      ],
      color: '#FF9AA2'
    },
    {
      name: "Gum Disease",
      description: "Infection of the tissues surrounding and supporting teeth.",
      causes: [
        "Plaque buildup",
        "Smoking/tobacco use",
        "Genetic predisposition"
      ],
      color: '#FFB7B2'
    },
    {
      name: "Oral Cancer",
      description: "Cancerous growth in the oral cavity.",
      causes: [
        "Tobacco use",
        "Heavy alcohol consumption",
        "HPV infection"
      ],
      color: '#FFDAC1'
    },
    {
      name: "Tooth Sensitivity",
      description: "Discomfort when teeth are exposed to certain stimuli.",
      causes: [
        "Worn tooth enamel",
        "Exposed tooth roots",
        "Tooth decay"
      ],
      color: '#E2F0CB'
    }
  ];

  return (
    <section className="diseases-page">
      <Container>
        <div className="diseases-header text-center mb-5">
          <h1>Common Dental Diseases</h1>
          <p className="lead">Hover over cards for details</p>
        </div>
        
        <Row className="g-4">
          {dentalDiseases.map((disease, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <DiseaseCard disease={disease} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Diseases;
