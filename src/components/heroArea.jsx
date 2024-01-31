import React from "react";
import leftVericalDecoration from "../images//vertical-decoration-left.svg";
import { Col, Container, Row } from "react-bootstrap";

const HeroArea = () => {
  return (
    <header className="header position-relative">
      <img
        src={leftVericalDecoration}
        alt=""
        className="vertical-decoration position-absolute d-none d-md-block"
      />
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="xl-text mt-5">
              Software Solutions For
              <span className="text-primary fw-bold replace-me ms-3">
                Small Business
              </span>
            </h1>
            <p className="lead">
              Boost your business with cutting-edge software solutions tailored
              to the needs of modern enterprises.
            </p>
            <a href="#" className="btn btn-primary text-white">
              Lear More
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeroArea;
