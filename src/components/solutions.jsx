import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import solution1 from "../images/solution-1.jpg";
import solution2 from "../images/solution-2.jpg";
import solution3 from "../images/solution-3.jpg";
import solution4 from "../images/solution-4.jpg";

const Solutions = () => {
  return (
    <section className="solutions my-5" id="solutions">
      <Container>
        <Row className="mb-4">
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center text-center"
          >
            <h5>
              <Badge bg={"primary"} className="rounded-0 text-uppercase">
                Solutions
              </Badge>
            </h5>
            <h2 class="fw-bold">
              Vera Provides Software Solutions For Business Acceleration
            </h2>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-4">
            <Card bg={"secondary"}>
              <Card.Img variant="top" src={solution1} />
              <Card.Body>
                <Card.Title>ERP Software Solutions</Card.Title>
                <Card.Text>
                  Our ERP software solution streamlines your business processes
                  and enhances operational efficiency. With integrated modules
                  for finance, human resources, and more, you can make
                  data-driven decisions.
                </Card.Text>
                <Badge bg={"primary"} className="rounded-0 text-uppercase">
                  Management
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card bg={"secondary"}>
              <Card.Img variant="top" src={solution2} />
              <Card.Body>
                <Card.Title>CRM Software Solutions</Card.Title>
                <Card.Text>
                  Our CRM software solution helps you build stronger customer
                  relationships and drive sales growth. Manage leads, track
                  interactions, and deliver personalized experiences to maximize
                  customer satisfaction and loyalty.
                </Card.Text>
                <Badge bg={"dark"} className="rounded-0 text-uppercase">
                  Marketing
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card bg={"secondary"}>
              <Card.Img variant="top" src={solution3} />
              <Card.Body>
                <Card.Title>SFA Software Solutions</Card.Title>
                <Card.Text>
                  Our SFA software solution empowers your sales team with the
                  tools they need to drive revenue growth. Streamline sales
                  processes, track performance, and enhance collaboration to
                  close deals faster.
                </Card.Text>
                <Badge bg={"primary"} className="rounded-0 text-uppercase">
                  Management
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card bg={"secondary"}>
              <Card.Img variant="top" src={solution4} />
              <Card.Body>
                <Card.Title>WMS Software Solutions</Card.Title>
                <Card.Text>
                  Our WMS software solution optimizes your warehouse operations
                  and improves inventory management. Gain real-time visibility,
                  automate processes, and reduce costs to ensure efficient
                  logistics.
                </Card.Text>
                <Badge bg={"dark"} className="rounded-0 text-uppercase">
                  Marketing
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solutions;
