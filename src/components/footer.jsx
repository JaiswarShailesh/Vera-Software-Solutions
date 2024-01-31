import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer bg-secondary py-6">
      <Container>
        <Row>
          <Col md={4} className="my-3">
            <h6>About Vera</h6>
            <p>
              Vera is a dedicated software solutions company that aims to
              provide exceptional services to its clients. We are committed to
              delivering innovative and customized solutions that meet your
              specific business needs.
            </p>
          </Col>
          <Col md={4} className="my-3">
            <h6>Links</h6>
            <ListGroup as={"ul"} className="list-unstyled">
              <ListGroup.Item as={"li"} className="bg-secondary border-0 p-0">
                Important: <a href="#">Terms & Conditions</a>,
                <a href="privacy.html">Privacy Policy</a>
              </ListGroup.Item>
              <ListGroup.Item as={"li"} className="bg-secondary border-0 p-0">
                Useful: <a href="index.html#expertise">Expertise</a>,
                <a href="index.html#pricing">Pricing</a>,
                <a href="index.html#newsletter">Newsletter</a>
              </ListGroup.Item>
              <ListGroup.Item as={"li"} className="bg-secondary border-0 p-0">
                Menu: <a href="index.html">Home</a>,
                <a href="index.html#details">Details</a>,
                <a href="index.html#solutions">Solutions</a>,
                <a href="index.html#projects">Projects</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4} className="my-3">
            <div class="mb-4">
              <a href="#" class="text-decoration-none">
                <i class="fab fa-facebook fa-3x text-light mx-2"></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i class="fab fa-twitter fa-3x text-light mx-2"></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i class="fab fa-instagram fa-3x text-light mx-2"></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i class="fab fa-pinterest fa-3x text-light mx-2"></i>
              </a>
            </div>
            <p>
              We would love to hear from you
              <a href="mailto:contact@site.com">
                <strong className="ms-1">contact@site.com</strong>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
