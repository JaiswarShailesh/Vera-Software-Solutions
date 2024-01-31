import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";

const FormArea = () => {
  return (
    <section className="contact my-7" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="fw-bold">Get More Information</h2>
            <hr className="hr-heading" />
            <p className="lead">
              We provide innovative software solutions that empower businesses
              to thrive in the digital era.
            </p>
            <ListGroup as="ul" className="list-unstyled lh-lg">
              <ListGroup.Item
                as="li"
                className="d-flex align-items-center border-0"
              >
                <i class="fas fa-check text-primary mx-3"></i>
                <div>
                  <strong>Customized Solutions: </strong> Our solutions are
                  designed to meet your specific business needs, ensuring
                  maximum efficiency and productivity.
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex align-items-center border-0"
              >
                <i class="fas fa-check text-primary mx-3"></i>
                <div>
                  <strong>Seamless Integration:</strong> We seamlessly integrate
                  our software with your existing systems, minimizing
                  disruptions and optimizing workflows.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <Form>
              <div class="mb-4">
                <FormControl
                  type="email"
                  className="bg-secondary"
                  placeholder="Enter name"
                />
              </div>
              <div class="mb-4">
                <FormControl
                  type="email"
                  className="bg-secondary"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-4">
                <FormControl
                  type="email"
                  className="bg-secondary"
                  placeholder="Enter phone"
                />
              </div>
              <div class="mb-4">
                <Form.Select
                  name="interested"
                  id="interested"
                  className="bg-secondary"
                >
                  <option>Interested In...</option>
                  <option value="erp">ERP Solution</option>
                  <option value="crm">CRM Solution</option>
                  <option value="cms">CMS Solution</option>
                  <option value="sfa">SFA Solution</option>
                </Form.Select>
              </div>
              <Form.Check className="mb-4">
                <Form.Check.Input type="checkbox" id="agree-check" />
                <Form.Check.Label htmlFor="agree-check">
                  I agree to the <a href="privacy.html">Privacy Policy</a>
                </Form.Check.Label>
              </Form.Check>
              <div class="d-grid gap-2">
                <FormControl type="button" value="Submit" className="btn btn-primary text-white"/>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormArea;
