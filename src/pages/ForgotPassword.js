// src/ForgotPassword.js
import { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('patientUser'));

    if (savedUser && savedUser.email === email) {
      setMessage("Login token sent. Logging you in...");
      localStorage.setItem('patientToken', 'demo-token');
      setTimeout(() => navigate('/'), 1500);
    } else {
      setMessage("Email not found.");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Forgot Password</h3>
              {message && <Alert variant={message.includes('not') ? 'danger' : 'success'}>{message}</Alert>}
              <Form onSubmit={handleReset}>
                <Form.Group className="mb-3">
                  <Form.Label>Enter your email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="w-100">Reset & Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
