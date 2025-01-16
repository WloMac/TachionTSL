import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function Footer() {
  return (
    <footer className="footer-section">
      <Container className="footer-container">
        <Row className="justify-content-center text-center">
        <Col md='auto'>
        <a href="#about" className="footer-link">
            O nas
          </a>
        </Col>
        <Col md='auto'>
        <a href="#service" className="footer-link">
            Usługi
          </a>
        </Col>
        <Col md='auto'>
        <a href="#contact" className="footer-link">
            Kontakt
          </a>
        </Col>                 
        </Row>
        <Row className="justify-content-center text-center">
          <Col md='auto'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Facebook
          </a>
          </Col>
          <Col md='auto'>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
          </Col>
          <Col md='auto'>          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          </Col>      
          </Row>
        <Row lassName="justify-content-center">
          <Col md='12'>
          <p className="footer-text poppins-regular text-center font-s">
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;