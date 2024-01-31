import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const Expertise = () => {
  return (
    <section id="expertise" className="expertise py-5 my-6 bg-secondary">
      <Container>
        <Row className="mb-5">
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center text-center"
          >
            <h5>
              <Badge bg={"primary"} className="rounded-0 text-uppercase">
                Expertise
              </Badge>
            </h5>
            <h2 class="fw-bold">Expertise Strong Points</h2>
            <p>
              We take pride in our expertise. With years of experience and a
              dedicated team, we deliver exceptional software solutions tailored
              to your needs. Our strong points include:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-lightbulb fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Flexible Services</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-desktop fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Great Design</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-wifi fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Easy To Use</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-cog fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Smart Options</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-glasses fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Advanced Tech</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-graduation-cap fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Good Expertise</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-cloud fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title as={"h4"}>Cloud Storage</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg={"transparent"} className="border-0 text-center mb-3">
              <div class="card-image">
                <i class="fas fa-chart-bar fa-5x text-primary"></i>
              </div>
              <Card.Body>
                <Card.Title>Detailed Reports</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Expertise;
