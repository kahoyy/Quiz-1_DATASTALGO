import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { businessData } from '../data/dummyData';

export const ContactPage = () => {
  const [formType, setFormType] = useState('contact'); // 'contact' or 'booking'
  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [bookingData, setBookingData] = useState({
    playerName: '',
    email: '',
    phone: '',
    stationType: '',
    date: '',
    time: '',
    duration: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactData);
    setSubmitted(true);
    setContactData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', bookingData);
    setSubmitted(true);
    setBookingData({
      playerName: '',
      email: '',
      phone: '',
      stationType: '',
      date: '',
      time: '',
      duration: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-light mb-3">Get In Touch</h1>
            <p className="lead text-muted">
              Contact us or book your gaming session
            </p>
          </Col>
        </Row>

        {/* Form Type Selector */}
        <Row className="mb-5">
          <Col className="text-center">
            <div className="btn-group" role="group">
              <Button
                variant={formType === 'booking' ? 'info' : 'outline-info'}
                onClick={() => setFormType('booking')}
                className="px-5"
              >
                🎮 Book a Station
              </Button>
              <Button
                variant={formType === 'contact' ? 'info' : 'outline-info'}
                onClick={() => setFormType('contact')}
                className="px-5"
              >
                💬 Send Message
              </Button>
            </div>
          </Col>
        </Row>

        {/* Contact Information */}
        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="p-4 bg-dark rounded border border-secondary text-center">
              <h5 className="text-info mb-3">📍 Location</h5>
              <p className="text-light">{businessData.address}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-dark rounded border border-secondary text-center">
              <h5 className="text-info mb-3">📧 Email</h5>
              <p className="text-light">{businessData.email}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-dark rounded border border-secondary text-center">
              <h5 className="text-info mb-3">📞 Phone</h5>
              <p className="text-light">{businessData.phone}</p>
            </div>
          </Col>
        </Row>

        {/* Forms */}
        <Row className="g-4">
          <Col lg={6}>
            <div className="p-4 bg-dark rounded border border-secondary">
              <h3 className="text-light mb-4">
                {formType === 'booking' ? '🎮 Book Your Station' : '💬 Send us a Message'}
              </h3>
              
              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  <strong>Success!</strong> {formType === 'booking' ? 'Your booking request has been received. We will confirm shortly!' : 'Your message has been sent. We will get back to you soon!'}
                </Alert>
              )}

              {formType === 'booking' ? (
                <Form onSubmit={handleBookingSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Player Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="playerName"
                      value={bookingData.playerName}
                      onChange={handleBookingChange}
                      required
                      className="bg-secondary border-secondary text-light"
                      placeholder="Your gaming name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleBookingChange}
                      required
                      className="bg-secondary border-secondary text-light"
                      placeholder="you@example.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleBookingChange}
                      className="bg-secondary border-secondary text-light"
                      placeholder="+1-800-COMSHOP"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Station Type</Form.Label>
                    <Form.Select
                      name="stationType"
                      value={bookingData.stationType}
                      onChange={handleBookingChange}
                      required
                      className="bg-secondary border-secondary text-light"
                    >
                      <option value="">Select a station type</option>
                      <option value="ultra">🎮 Ultra Gaming ($12.99/hr)</option>
                      <option value="pro">⚡ Pro Gaming ($8.99/hr)</option>
                      <option value="casual">🎯 Casual Gaming ($4.99/hr)</option>
                      <option value="workstation">💻 Workstation ($5.99/hr)</option>
                      <option value="vip">👑 VIP Booth ($19.99/hr)</option>
                      <option value="streaming">📡 Streaming Studio ($14.99/hr)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleBookingChange}
                      required
                      className="bg-secondary border-secondary text-light"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Time</Form.Label>
                    <Form.Control
                      type="time"
                      name="time"
                      value={bookingData.time}
                      onChange={handleBookingChange}
                      required
                      className="bg-secondary border-secondary text-light"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Duration</Form.Label>
                    <Form.Select
                      name="duration"
                      value={bookingData.duration}
                      onChange={handleBookingChange}
                      required
                      className="bg-secondary border-secondary text-light"
                    >
                      <option value="">Select duration</option>
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="8">8 hours (Full Day Pass)</option>
                    </Form.Select>
                  </Form.Group>

                  <Button variant="info" type="submit" size="lg" className="w-100">
                    Confirm Booking
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={handleContactSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={contactData.fullName}
                      onChange={handleContactChange}
                      required
                      className="bg-secondary border-secondary text-light"
                      placeholder="John Doe"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleContactChange}
                      required
                      className="bg-secondary border-secondary text-light"
                      placeholder="john@example.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={contactData.phone}
                      onChange={handleContactChange}
                      className="bg-secondary border-secondary text-light"
                      placeholder="+1-800-COMSHOP"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={contactData.subject}
                      onChange={handleContactChange}
                      required
                      className="bg-secondary border-secondary text-light"
                      placeholder="How can we help?"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      value={contactData.message}
                      onChange={handleContactChange}
                      required
                      className="bg-secondary border-secondary text-light"
                      placeholder="Tell us about your inquiry..."
                    />
                  </Form.Group>

                  <Button variant="info" type="submit" size="lg" className="w-100">
                    Send Message
                  </Button>
                </Form>
              )}
            </div>
          </Col>

          {/* Information Section */}
          <Col lg={6}>
            <div className="p-4 bg-dark rounded border border-secondary h-100">
              <h3 className="text-light mb-4">Business Hours</h3>
              <div className="mb-4">
                <p className="text-light mb-2"><strong>Monday - Friday:</strong></p>
                <p className="text-muted">2:00 PM - 2:00 AM</p>
              </div>
              <div className="mb-4">
                <p className="text-light mb-2"><strong>Saturday:</strong></p>
                <p className="text-muted">12:00 PM - 3:00 AM</p>
              </div>
              <div className="mb-4">
                <p className="text-light mb-2"><strong>Sunday:</strong></p>
                <p className="text-muted">12:00 PM - 12:00 AM</p>
              </div>

              <hr className="bg-secondary my-4" />

              <h5 className="text-info mb-3">Quick Info</h5>
              <p className="text-muted mb-3">
                📋 Bookings available up to 30 days in advance
              </p>
              <p className="text-muted mb-3">
                ❌ Cancellations must be made 2 hours before your booking
              </p>
              <p className="text-muted mb-3">
                💳 Secure online payment or pay at arrival
              </p>
              <p className="text-muted mb-3">
                🎮 Member discounts available on all bookings
              </p>

              <hr className="bg-secondary my-4" />

              <h5 className="text-info mb-3">Special Offers</h5>
              <ul className="text-muted">
                <li>🎉 10% off for first-time members</li>
                <li>👥 Group discounts (5+ people)</li>
                <li>📅 Off-peak rates available</li>
                <li>🏆 Tournament hosting packages</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5 pt-5 border-top border-secondary">
          <Col className="text-center mb-4">
            <h2 className="display-5 fw-bold text-light">Frequently Asked Questions</h2>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <div className="accordion accordion-dark" id="faqAccordion">
              <div className="accordion-item bg-dark border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button bg-dark text-light" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq1"
                  >
                    How do I book a gaming station?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    You can book online using our booking form above, call us directly, or visit us in person. Online bookings are recommended for guaranteed availability.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button bg-dark text-light collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq2"
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    We accept all major credit cards, debit cards, online transfers, and cash. All transactions are secure and encrypted.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button bg-dark text-light collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq3"
                  >
                    Can I cancel or reschedule my booking?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    Yes! Free cancellations and rescheduling are available up to 2 hours before your booking. Cancellations within 2 hours may incur a 50% fee.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button bg-dark text-light collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq4"
                  >
                    Do you offer membership discounts?
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    Absolutely! Members enjoy 20% discounts on all bookings, priority station access, and exclusive event invitations. Join today!
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button bg-dark text-light collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq5"
                  >
                    Is food and drinks provided?
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    Yes! We have a full café with snacks, drinks, and meals available. Orders can be delivered directly to your station.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
