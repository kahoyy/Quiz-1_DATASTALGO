import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

export const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 bg-dark border-secondary hover-card" style={{ transition: 'transform 0.3s' }}>
      <Card.Body>
        <Card.Title className="text-light">{product.name}</Card.Title>
        <Card.Text className="text-muted small">{product.specs}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 text-success mb-0">${product.price}</span>
          <Badge bg={product.inStock ? 'success' : 'danger'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export const TeamMemberCard = ({ member }) => {
  return (
    <Card className="h-100 bg-dark border-secondary text-center">
      <Card.Img 
        variant="top" 
        src={member.image} 
        alt={member.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="text-light">{member.name}</Card.Title>
        <p className="text-info fw-bold">{member.title}</p>
        <p className="text-muted small">{member.bio}</p>
        <Badge bg="secondary">{member.specialty}</Badge>
      </Card.Body>
    </Card>
  );
};

export const ServiceCard = ({ service }) => {
  return (
    <Card className="h-100 bg-dark border-secondary text-center">
      <Card.Body>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {service.icon}
        </div>
        <Card.Title className="text-light">{service.name}</Card.Title>
        <Card.Text className="text-muted small">{service.description}</Card.Text>
        <p className="text-success fw-bold">{service.price}</p>
      </Card.Body>
    </Card>
  );
};

export const TestimonialCard = ({ testimonial }) => {
  const stars = Array(testimonial.rating).fill('⭐').join('');
  
  return (
    <Card className="bg-dark border-secondary">
      <Card.Body>
        <p className="text-warning mb-2">{stars}</p>
        <Card.Text className="text-muted mb-3">"{testimonial.message}"</Card.Text>
        <div>
          <p className="mb-0 text-light fw-bold">{testimonial.clientName}</p>
          <p className="text-secondary small">{testimonial.company}</p>
        </div>
      </Card.Body>
    </Card>
  );
};
