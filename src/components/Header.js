import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function Header() {
  const navigate = useNavigate();

  // Logout function to remove the patient token and navigate to login
  const handleLogout = () => {
    localStorage.removeItem('patientToken');
    localStorage.removeItem('appointmentData'); // Remove appointment data as well
    navigate('/login');
  };

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('patientToken');

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo/Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="180" height="54">
            <path d="M110,30 C115,20 130,20 135,30 C140,40 150,50 150,70 C150,90 140,100 135,100 C130,100 125,90 120,100 C115,110 105,110 100,100 C95,90 90,90 85,100 C80,110 70,110 65,100 C60,90 50,90 50,70 C50,50 60,40 65,30 C70,20 85,20 90,30 C95,40 105,40 110,30Z" fill="#4DB6AC" stroke="#00796B" strokeWidth="2"/>
            <text x="170" y="50" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#8B5A2B">SMILE</text>
            <text x="170" y="80" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="#8B5A2B">DENTAL</text>
            <text x="170" y="105" fontFamily="Arial" fontSize="18" fill="#D93D3D">HOSPITAL</text>
            <path d="M170,110 Q220,120 320,110" stroke="#4DB6AC" strokeWidth="3" fill="none"/>
            <circle cx="115" cy="40" r="3" fill="white"/>
          </svg>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/doctors" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Our Doctors</Nav.Link>
            <Nav.Link as={Link} to="/services" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Services</Nav.Link>
            <Nav.Link as={Link} to="/diseases" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Dental Guide</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/policy" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Privacy Policy</Nav.Link>
            <Nav.Link as={Link} to="/terms" className="mx-2" style={{ color: '#5C4033', fontWeight: '500' }}>Terms & Conditions</Nav.Link>

            {/* Display View Info link only if the user is logged in */}
            {isLoggedIn && (
              <Nav.Link
                as={Link}
                to="/view-info"
                className="mx-2"
                style={{
                  color: '#5C4033',
                  fontWeight: '500',
                }}
              >
                View Info
              </Nav.Link>
            )}

            {/* Logout button */}
            {isLoggedIn ? (
              <Nav.Link
                onClick={handleLogout}
                className="ms-3 px-3"
                style={{
                  backgroundColor: '#D93D3D',
                  color: 'white',
                  borderRadius: '5px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="ms-3 px-3"
                style={{
                  backgroundColor: '#000',
                  color: 'white',
                  borderRadius: '5px',
                  fontWeight: '500'
                }}
              >
                Patient Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
