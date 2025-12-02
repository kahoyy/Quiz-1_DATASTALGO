import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

export const Header = ({ onNavigate, currentPage }) => {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="navbar-dark border-bottom border-secondary">
      <Container>
        <Navbar.Brand 
          onClick={() => onNavigate('home')}
          style={{ cursor: 'pointer' }}
          className="fw-bold"
        >
          <span style={{ fontSize: '1.5rem', color: '#00d4ff' }}>⚡</span> SimDrei ComShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => onNavigate('home')}
              active={currentPage === 'home'}
              style={{ cursor: 'pointer' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => onNavigate('products')}
              active={currentPage === 'products'}
              style={{ cursor: 'pointer' }}
            >
              Products
            </Nav.Link>
            <Nav.Link 
              onClick={() => onNavigate('services')}
              active={currentPage === 'services'}
              style={{ cursor: 'pointer' }}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              onClick={() => onNavigate('team')}
              active={currentPage === 'team'}
              style={{ cursor: 'pointer' }}
            >
              Team
            </Nav.Link>
            <Nav.Link 
              onClick={() => onNavigate('contact')}
              active={currentPage === 'contact'}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export const Footer = ({ businessData }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-5 border-top border-secondary mt-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">
              <span style={{ color: '#00d4ff' }}>⚡</span> {businessData.name}
            </h5>
            <p className="text-muted small">{businessData.tagline}</p>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Services</a></li>
              <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <p className="text-muted small">
              📧 {businessData.email}<br/>
              📞 {businessData.phone}<br/>
              📍 {businessData.location}
            </p>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="mb-3">Follow Us</h6>
            <p className="text-muted small">
              <a href="#" className="text-muted text-decoration-none">Facebook</a> |
              <a href="#" className="text-muted text-decoration-none"> Twitter</a> |
              <a href="#" className="text-muted text-decoration-none"> LinkedIn</a>
            </p>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col className="text-center text-muted small">
            <p>&copy; {currentYear} {businessData.name}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
