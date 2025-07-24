import { Container, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('doctorToken');
    navigate('/doctor-login');
  };

  return (
    <Container className="content-container my-5">
      <Alert variant="success" className="text-center">
        <h2>Welcome, Doctor!</h2>
        <p>Professional Dashboard</p>
      </Alert>
      
      <div className="text-center">
        <Button 
          variant="danger"
          onClick={handleLogout}
          className="mt-3"
        >
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default DoctorDashboard;