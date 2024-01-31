import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <section id="newsletter" className="newsletter my-6">
      <Container>
        <Row className="mb-4">
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center text-center"
          >
            <h2 class="fw-bold">Subscribe And Follow</h2>
            <p>
              Stay updated with our latest news and announcements. Subscribe to
              our newsletter and follow us on social media for valuable insights
              and exciting updates.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center text-center"
          >
            <InputGroup>
              <Form.Control placeholder="Enter Email Address" type="email" />
              <InputGroup.Text
                as={"button"}
                id="inputGroup-sizing-md"
                className="btn btn-primary text-white rounded-0"
              >
                Submit
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
