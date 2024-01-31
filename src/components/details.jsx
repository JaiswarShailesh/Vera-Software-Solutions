import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import details1 from "../images/details-1.jpg";
import details2 from "../images/details-2.jpg";
import verticalDecLeft from "../images/vertical-decoration-left.svg";
import verticalDecRight from "../images/vertical-decoration-right.svg";

const Details = () => {
  return (
    <>
      <section className="details my-5 position-relative" id="details">
        <Container>
          <Row className="pt-5">
            <Col lg={6}>
              <h2 class="fw-bold">Evaluation & Deployment</h2>
              <hr class="hr-heading" />
              <p>
                We offer comprehensive evaluation and deployment services to
                ensure a smooth and successful implementation of our software
                solutions.
              </p>
              <ListGroup as="ul" className="list-unstyled lh-lg">
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center border-0"
                >
                  <i class="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Customized solutions: </strong>We tailor our
                    solutions to align with your unique business needs
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center border-0"
                >
                  <i className="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Seamless Integration:</strong> Our team ensures
                    smooth integration of the software into your existing
                    infrastructure, minimizing disruptions
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={6}>
              <img src={details1} alt="" className="img-fluid rounded-2" />
            </Col>
            <Col lg={6}>
              <img
                src={verticalDecLeft}
                alt=""
                className="vertical-decoration position-absolute d-none d-md-block"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="details-2 my-5 position-relative">
        <Container>
          <Row className="pt-5">
            <Col lg={6}>
              <img src={details2} alt="" className="img-fluid rounded-2" />
            </Col>
            <Col lg={6}>
              <h2 class="fw-bold">Maintenance & Support</h2>
              <hr class="hr-heading" />
              <p>
                We provide comprehensive maintenance and support services to
                ensure the smooth and uninterrupted operation of your software
                solutions.{" "}
                <a href="#">Learn more about our support services.</a>
              </p>
              <ListGroup as="ul" className="list-unstyled lh-lg">
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center border-0"
                >
                  <i class="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Proactive Maintenance:</strong> We proactively
                    monitor and maintain your software solutions to prevent
                    issues and optimize performance.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center border-0"
                >
                  <i className="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Timely Updates:</strong> We ensure your software is
                    up to date with the latest features, security patches, and
                    enhancements.
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <img
                src={verticalDecRight}
                alt=""
                className="vertical-decoration position-absolute d-none d-md-block"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Details;
