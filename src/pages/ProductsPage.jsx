import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Badge } from 'react-bootstrap';
import { productCategories } from '../data/dummyData';

const StationCard = ({ station }) => {
  return (
    <Card className="h-100 bg-dark border-secondary hover-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="text-light mb-0">{station.name}</Card.Title>
          <Badge bg={station.availability ? 'success' : 'danger'} className="ms-2">
            {station.availability ? 'Available' : 'In Use'}
          </Badge>
        </div>
        <Card.Text className="text-muted small mb-3">{station.specs}</Card.Text>
        <div className="d-flex justify-content-between align-items-center pt-2 border-top border-secondary">
          <span className="h5 text-success mb-0">${station.pricePerHour}/hr</span>
          <button className="btn btn-sm btn-info">Book Now</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  
  const activeCategory = productCategories.find(cat => cat.id === selectedCategory);
  
  return (
    <main className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-light mb-3">Gaming Stations</h1>
            <p className="lead text-muted">
              Choose from our variety of high-performance gaming and workstations
            </p>
          </Col>
        </Row>

        {/* Category Navigation */}
        <Row className="mb-4">
          <Col>
            <Nav 
              className="flex-wrap bg-dark p-3 rounded border border-secondary"
              variant="pills"
            >
              {productCategories.map(category => (
                <Nav.Item key={category.id}>
                  <Nav.Link
                    active={selectedCategory === category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="me-2 mb-2 text-light"
                    style={{ cursor: 'pointer', backgroundColor: selectedCategory === category.id ? '#0dcaf0' : 'transparent' }}
                  >
                    <span className="me-2">{category.icon}</span>
                    {category.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Stations Grid */}
        {activeCategory && (
          <>
            <Row className="mb-4">
              <Col>
                <h2 className="text-light mb-2">
                  {activeCategory.icon} {activeCategory.name}
                </h2>
                <p className="text-muted">
                  {activeCategory.description}
                </p>
                <p className="text-secondary small">
                  {activeCategory.stations.filter(s => s.availability).length} of {activeCategory.stations.length} stations available
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              {activeCategory.stations.map(station => (
                <Col lg={6} md={12} key={station.id}>
                  <StationCard station={station} />
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* Additional Info */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col md={4} className="mb-3">
            <Card className="bg-dark border-secondary text-center">
              <Card.Body>
                <h5 className="text-info mb-2">⚡ Latest Hardware</h5>
                <p className="text-muted small">All stations feature cutting-edge components</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-dark border-secondary text-center">
              <Card.Body>
                <h5 className="text-info mb-2">🌐 High-Speed Internet</h5>
                <p className="text-muted small">Gigabit connections for lag-free gaming</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-dark border-secondary text-center">
              <Card.Body>
                <h5 className="text-info mb-2">📊 Real-time Availability</h5>
                <p className="text-muted small">Check and book your station instantly</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
