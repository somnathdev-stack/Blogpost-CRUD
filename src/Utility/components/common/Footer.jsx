import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a blog platform where users can share and comment on posts.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/home" className="text-light">Home</Nav.Link>
              <Nav.Link href="/about" className="text-light">About</Nav.Link>
              <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@blogplatform.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Blog Platform. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

