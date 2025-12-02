import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { services } from '../data/dummyData';

const ServicePackageCard = ({ service }) => {
  return (
    <Card className="h-100 bg-dark border-secondary hover-card">
      <Card.Body>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {service.icon}
        </div>
        <Card.Title className="text-light">{service.name}</Card.Title>
        <Card.Text className="text-muted small mb-3">{service.description}</Card.Text>
        <p className="text-success fw-bold fs-5 mb-3">{service.price}</p>
        <ListGroup variant="flush" className="bg-dark">
          {service.features.map((feature, idx) => (
            <ListGroup.Item key={idx} className="bg-dark text-muted small border-secondary py-2">
              ✓ {feature}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ServicesPage = () => {
  return (
    <main className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-light mb-3">Packages & Services</h1>
            <p className="lead text-muted">
              Choose the perfect plan for your gaming and computing needs
            </p>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="g-4 mb-5">
          {services.map(service => (
            <Col lg={4} md={6} key={service.id}>
              <ServicePackageCard service={service} />
            </Col>
          ))}
        </Row>

        {/* Pricing Info */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center mb-4">
            <h2 className="display-5 fw-bold text-light">How Our Pricing Works</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <div className="p-4 bg-dark rounded border border-secondary">
              <h5 className="text-info mb-3">💰 Pay-As-You-Go</h5>
              <p className="text-muted">
                New users can start with hourly rates. Perfect for trying out our premium stations without long-term commitment. Simply walk in, register, and start gaming!
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 bg-dark rounded border border-secondary">
              <h5 className="text-info mb-3">🎟️ Memberships</h5>
              <p className="text-muted">
                Regular gamers save big with daily passes and monthly memberships. Enjoy priority booking, exclusive benefits, and significant savings compared to hourly rates.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 bg-dark rounded border border-secondary">
              <h5 className="text-info mb-3">🏆 Event Hosting</h5>
              <p className="text-muted">
                Host tournaments, LAN parties, and competitive gaming events with our professional setup. Includes streaming, commentary, and event management support.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 bg-dark rounded border border-secondary">
              <h5 className="text-info mb-3">👥 Group Discounts</h5>
              <p className="text-muted">
                Bring your gaming squad or team for exclusive group rates. Perfect for gaming communities, esports teams, and corporate team-building events.
              </p>
            </div>
          </Col>
        </Row>

        {/* Premium Features */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center mb-4">
            <h2 className="display-5 fw-bold text-light">What Makes Us Special</h2>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md={4} className="text-center">
            <div className="mb-3" style={{ fontSize: '2.5rem' }}>⚡</div>
            <h5 className="text-light">High-Speed Internet</h5>
            <p className="text-muted small">Gigabit fiber connections for zero lag gaming</p>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3" style={{ fontSize: '2.5rem' }}>🎮</div>
            <h5 className="text-light">Premium Hardware</h5>
            <p className="text-muted small">Latest GPUs and processors for peak performance</p>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3" style={{ fontSize: '2.5rem' }}>🍔</div>
            <h5 className="text-light">Café Services</h5>
            <p className="text-muted small">Snacks, drinks, and meals delivered to your station</p>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3" style={{ fontSize: '2.5rem' }}>🎧</div>
            <h5 className="text-light">Comfort First</h5>
            <p className="text-muted small">Premium gaming chairs and ergonomic setups</p>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3" style={{ fontSize: '2.5rem' }}>📡</div>
            <h5 className="text-light">Streaming Ready</h5>
            <p className="text-muted small">Green screen and streaming equipment available</p>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3" style={{ fontSize: '2.5rem' }}>👥</div>
            <h5 className="text-light">Community</h5>
            <p className="text-muted small">Regular tournaments and gaming community events</p>
          </Col>
        </Row>

        {/* CTA */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center">
            <h3 className="text-light mb-3">Ready to Game?</h3>
            <p className="text-muted mb-3">
              Visit us today or book your station online. First-time members get a 10% discount!
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
