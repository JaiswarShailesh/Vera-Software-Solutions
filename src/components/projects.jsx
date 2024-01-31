import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import project1 from "../images/project-1.jpg";
import project2 from "../images/project-2.jpg";
import project3 from "../images/project-3.jpg";
import project4 from "../images/project-4.jpg";
import project5 from "../images/project-5.jpg";
import project6 from "../images/project-6.jpg";

const Projects = () => {
  return (
    <section id="projects" className="projects m">
      <Container>
        <Row className="mb-4">
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center text-center"
          >
            <h5>
              <Badge bg={"primary"} className="rounded-0 text-uppercase">
                Projects
              </Badge>
            </h5>
            <h2 class="fw-bold">Project's We Are Proud Of</h2>
            <p>
              We take pride in our successful projects and the value they bring
              to our clients. With our expertise and dedication, we have
              delivered exceptional results. Here are some highlights
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card bg={"secondary"}>
              <a data-bs-toggle="modal" data-bs-target="#modal1">
                <img src={project1} alt="" className="card-img-top" />
                <div className="card-body">
                  <p>
                    <strong>Orkla Foods</strong> - Donec bibeum mollis liga sit
                    amet pulvinar sed viverra noris
                  </p>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg={"secondary"}>
              <a data-bs-toggle="modal" data-bs-target="#modal1">
                <img src={project2} alt="" className="card-img-top" />
                <div className="card-body">
                  <p>
                    <strong>First Bank</strong> - Donec bibeum mollis liga sit
                    amet pulvinar sed viverra noris
                  </p>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg={"secondary"}>
              <a data-bs-toggle="modal" data-bs-target="#modal1">
                <img src={project3} alt="" className="card-img-top" />
                <div className="card-body">
                  <p>
                    <strong>All Sweets</strong> - Donec bibeum mollis liga sit
                    amet pulvinar sed viverra noris
                  </p>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg={"secondary"}>
              <a data-bs-toggle="modal" data-bs-target="#modal1">
                <img src={project4} alt="" className="card-img-top" />
                <div className="card-body">
                  <p>
                    <strong>Fast Courier</strong> - Donec bibeum mollis liga sit
                    amet pulvinar sed viverra noris
                  </p>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg={"secondary"}>
              <a data-bs-toggle="modal" data-bs-target="#modal1">
                <img src={project5} alt="" className="card-img-top" />
                <div className="card-body">
                  <p>
                    <strong>Lyra Market</strong> - Donec bibeum mollis liga sit
                    amet pulvinar sed viverra noris
                  </p>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg={"secondary"}>
              <a data-bs-toggle="modal" data-bs-target="#modal1">
                <img src={project6} alt="" className="card-img-top" />
                <div className="card-body">
                  <p>
                    <strong>Monday Stores</strong> - Donec bibeum mollis liga
                    sit amet pulvinar sed viverra
                  </p>
                </div>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
