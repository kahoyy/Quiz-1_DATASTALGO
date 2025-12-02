import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { businessData, testimonials } from '../data/dummyData';
import { TestimonialCard } from '../components/CardComponents';

export const HomePage = ({ onNavigate }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient py-5" style={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-light mb-3">
                Welcome to <span style={{ color: '#00d4ff' }}>SimDrei ComShop</span>
              </h1>
              <p className="lead text-muted mb-4">
                {businessData.tagline}
              </p>
              <p className="text-light mb-4">
                Experience premium gaming at our state-of-the-art internet café. From casual browsing to competitive gaming, we have the perfect setup for you. Join our thriving gaming community today!
              </p>
              <div className="d-flex gap-3">
                <Button 
                  variant="info" 
                  size="lg"
                  onClick={() => onNavigate('products')}
                >
                  Browse Stations
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                >
                  Book Now
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div style={{ fontSize: '8rem' }}>🎮</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5 border-bottom border-secondary">
        <Container>
          <Row className="mb-5">
            <Col className="text-center mb-4">
              <h2 className="display-5 fw-bold text-light mb-3">About SimDrei ComShop</h2>
              <p className="lead text-muted">Your Premier Gaming & Productivity Hub</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={6}>
              <Card className="bg-dark border-secondary h-100">
                <Card.Body>
                  <h5 className="text-info mb-3">🎯 Our Mission</h5>
                  <p className="text-light">
                    {businessData.description}
                  </p>
                  <p className="text-muted">
                    We're dedicated to providing the best gaming experience with world-class equipment, lightning-fast internet, and a welcoming community atmosphere.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-dark border-secondary h-100">
                <Card.Body>
                  <h5 className="text-info mb-3">⭐ Why Choose Us</h5>
                  <ul className="text-light">
                    <li>Latest Gaming Hardware</li>
                    <li>Ultra-Fast Gigabit Internet</li>
                    <li>Flexible Pricing Plans</li>
                    <li>24/7 Professional Support</li>
                    <li>Regular Gaming Events</li>
                    <li>Food & Beverage Service</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark border-bottom border-secondary">
        <Container>
          <Row className="text-center g-4">
            <Col md={3} sm={6} className="mb-4">
              <h3 className="display-6 text-info fw-bold">30+</h3>
              <p className="text-muted">Gaming Stations</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h3 className="display-6 text-info fw-bold">5K+</h3>
              <p className="text-muted">Active Members</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h3 className="display-6 text-info fw-bold">6+</h3>
              <p className="text-muted">Years in Business</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h3 className="display-6 text-info fw-bold">24/7</h3>
              <p className="text-muted">Open Daily</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Stations */}
      <section className="py-5 border-bottom border-secondary">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold text-light mb-3">Featured Station Categories</h2>
              <p className="lead text-muted">Something for everyone</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="bg-dark border-secondary hover-card text-center h-100">
                <Card.Body>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
                  <Card.Title className="text-light">Ultra Gaming</Card.Title>
                  <Card.Text className="text-muted small mb-3">
                    Top-tier rigs for competitive gaming and tournaments
                  </Card.Text>
                  <p className="text-success fw-bold">$12.99/hr</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-dark border-secondary hover-card text-center h-100">
                <Card.Body>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                  <Card.Title className="text-light">Pro Gaming</Card.Title>
                  <Card.Text className="text-muted small mb-3">
                    High-performance stations for serious gamers
                  </Card.Text>
                  <p className="text-success fw-bold">$8.99/hr</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-dark border-secondary hover-card text-center h-100">
                <Card.Body>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                  <Card.Title className="text-light">Workstations</Card.Title>
                  <Card.Text className="text-muted small mb-3">
                    Professional setups for productivity and work
                  </Card.Text>
                  <p className="text-success fw-bold">$5.99/hr</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold text-light mb-3">What Our Gamers Say</h2>
              <p className="lead text-muted">Real feedback from real gamers</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {testimonials.map(testimonial => (
              <Col md={6} lg={3} key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark border-top border-secondary">
        <Container className="text-center">
          <h2 className="display-5 fw-bold text-light mb-4">Ready to Level Up Your Gaming?</h2>
          <p className="lead text-muted mb-4">
            Join thousands of gamers enjoying the best gaming experience in town. First-time members get 10% off!
          </p>
          <Button 
            variant="info" 
            size="lg"
            onClick={() => onNavigate('contact')}
          >
            Book Your Session Today
          </Button>
        </Container>
      </section>
    </main>
  );
};
