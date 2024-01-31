import React from "react";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing my-6">
      <Container>
        <Row className="mb-4">
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center text-center"
          >
            <h5>
              <Badge bg={"primary"} className="rounded-0 text-uppercase">
                Pricing
              </Badge>
            </h5>
            <h2 class="fw-bold">Flexible Pricing Options</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3}>
            <Card bg={"secondary"} className="text-center rounded-0">
              <Card.Body>
                <div className="xl-text fw-bold">$99</div>
                <Card.Title
                  as={"h4"}
                  className="text-primary text-uppercase fw-bold mb-5"
                >
                  Standard
                </Card.Title>
                <Card.Text>
                  Our standard pricing plan offers a comprehensive set of
                  features for your software needs
                </Card.Text>
                <ListGroup as={"ul"} className="list-unstyled lh-lg mt-5">
                  <ListGroup.Item
                    as={"li"}
                    className="text-uppercase fs-5 fw-bold border-0  bg-secondary"
                  >
                    Subscribers List
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={"li"}
                    className="text-uppercase fs-5 fw-bold border-0 bg-secondary"
                  >
                    User Admin Control
                  </ListGroup.Item>
                </ListGroup>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"secondary"} className="text-center rounded-0">
              <Card.Body>
                <div className="xl-text fw-bold">$199</div>
                <Card.Title
                  as={"h4"}
                  className="text-primary text-uppercase fw-bold mb-5"
                >
                  Advanced
                </Card.Title>
                <Card.Text>
                  Unlock additional enhanced capabilities. Take your software
                  solutions to the next level
                </Card.Text>
                <ListGroup as={"ul"} className="list-unstyled lh-lg mt-5">
                  <ListGroup.Item
                    as={"li"}
                    className="text-uppercase fs-5 fw-bold border-0  bg-secondary"
                  >
                    Limited Storage
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={"li"}
                    className="text-uppercase fs-5 fw-bold border-0 bg-secondary"
                  >
                    Free Cloud Storage
                  </ListGroup.Item>
                </ListGroup>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"secondary"} className="text-center rounded-0">
              <Card.Body>
                <div className="xl-text fw-bold">$299</div>
                <Card.Title
                  as={"h4"}
                  className="text-primary text-uppercase fw-bold mb-5"
                >
                  Complete
                </Card.Title>
                <Card.Text>
                  Our complete pricing plan offers an all-inclusive package with
                  advanced features
                </Card.Text>
                <ListGroup as={"ul"} className="list-unstyled lh-lg mt-5">
                  <ListGroup.Item
                    as={"li"}
                    className="text-uppercase fs-5 fw-bold border-0 bg-secondary"
                  >
                    Deployment Pro
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={"li"}
                    className="text-uppercase fs-5 fw-bold border-0 bg-secondary"
                  >
                    Premium Support
                  </ListGroup.Item>
                </ListGroup>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
