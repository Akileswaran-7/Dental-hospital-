// src/Login.js
import { useState } from 'react';
import { Container, Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const savedUser = JSON.parse(localStorage.getItem('patientUser'));

    setTimeout(() => {
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        localStorage.setItem('patientToken', 'demo-token');
        setSuccess('Login successful!');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1588776814546-ec7d1f3de70c?auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
              <Card.Body>
                <h2 className="text-center mb-4">Patient Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </Button>
                  <div className="text-center">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                </Form>
                <hr className="my-4" />
                <div className="text-center">
                  <p className="mb-1">New patient?</p>
                  <Link to="/register" className="btn btn-outline-primary">Create Account</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
