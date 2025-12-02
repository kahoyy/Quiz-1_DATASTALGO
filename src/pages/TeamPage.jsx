import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { teamMembers } from '../data/dummyData';
import { TeamMemberCard } from '../components/CardComponents';

export const TeamPage = () => {
  return (
    <main className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-light mb-3">Meet Our Team</h1>
            <p className="lead text-muted">
              Passionate gamers and professionals dedicated to your gaming experience
            </p>
          </Col>
        </Row>

        {/* Team Members */}
        <Row className="g-4 mb-5">
          {teamMembers.map(member => (
            <Col lg={3} md={6} key={member.id}>
              <TeamMemberCard member={member} />
            </Col>
          ))}
        </Row>

        {/* Team Values */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center mb-4">
            <h2 className="display-5 fw-bold text-light">Our Core Values</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={3} sm={6}>
            <div className="text-center p-4 bg-dark rounded border border-secondary">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
              <h5 className="text-info mb-2">Passion for Gaming</h5>
              <p className="text-muted small">
                We live and breathe gaming. We understand what gamers need.
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="text-center p-4 bg-dark rounded border border-secondary">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h5 className="text-info mb-2">Community First</h5>
              <p className="text-muted small">
                Building a welcoming community for all gamers.
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="text-center p-4 bg-dark rounded border border-secondary">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h5 className="text-info mb-2">Excellence</h5>
              <p className="text-muted small">
                Best equipment, best service, best experience.
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="text-center p-4 bg-dark rounded border border-secondary">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❤️</div>
              <h5 className="text-info mb-2">Customer Care</h5>
              <p className="text-muted small">
                Your satisfaction is our ultimate goal.
              </p>
            </div>
          </Col>
        </Row>

        {/* Company Culture */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col lg={6} className="mb-4">
            <div className="p-4 bg-dark rounded border border-secondary h-100">
              <h4 className="text-info mb-3">Our Gaming Community</h4>
              <p className="text-light mb-3">
                SimDrei ComShop isn't just a place to game—it's a thriving community. We host regular tournaments, LAN parties, and gaming events that bring gamers together.
              </p>
              <p className="text-muted">
                From casual players to competitive esports teams, we welcome everyone. Our events have attracted hundreds of gamers and helped launch the careers of several professional players.
              </p>
            </div>
          </Col>
          <Col lg={6} className="mb-4">
            <div className="p-4 bg-dark rounded border border-secondary h-100">
              <h4 className="text-info mb-3">Our Mission</h4>
              <p className="text-light mb-3">
                We're committed to providing the ultimate gaming hub with cutting-edge technology, high-speed internet, and a supportive atmosphere for gamers of all levels.
              </p>
              <p className="text-muted">
                Every team member is a gamer at heart. We constantly upgrade our equipment, expand our services, and innovate to ensure SimDrei ComShop remains the best gaming venue in the region.
              </p>
            </div>
          </Col>
        </Row>

        {/* Why We're Different */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center mb-4">
            <h2 className="display-5 fw-bold text-light">What Makes Us Special</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <div className="p-4 bg-dark rounded border border-secondary text-center">
              <h5 className="text-info mb-3">🏆 Tournament Hosts</h5>
              <p className="text-muted">
                Our team has organized over 50 tournaments and gaming events with prize pools totaling $100,000+.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-dark rounded border border-secondary text-center">
              <h5 className="text-info mb-3">🎯 Always Learning</h5>
              <p className="text-muted">
                We stay updated on the latest games, hardware, and gaming trends to serve you better.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-dark rounded border border-secondary text-center">
              <h5 className="text-info mb-3">🌍 Global Network</h5>
              <p className="text-muted">
                Connected with gaming communities worldwide, bringing international events and opportunities.
              </p>
            </div>
          </Col>
        </Row>

        {/* Join Us CTA */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center">
            <h3 className="text-light mb-3">Join the SimDrei ComShop Family</h3>
            <p className="text-muted mb-3">
              Become part of our gaming community and experience the ultimate gaming venue.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
