import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo1 from "../images/partner-logo-1.png";
import logo2 from "../images/partner-logo-2.png";
import logo3 from "../images/partner-logo-3.png";
import logo4 from "../images/partner-logo-4.png";
import logo5 from "../images/partner-logo-5.png";

const Partners = () => {
  return (
    <section className="partners py-4 overflow-hidden">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <h6 className="text-center mb-4 text-uppercase">Our Partners</h6>
            <div className="d-flex justify-content-center align-items-center text-center">
              <div>
                <img src={logo1} alt="" className="mx-4" />
              </div>
              <div className="d-none d-sm-block">
                <img src={logo2} alt="" className="mx-4" />
              </div>
              <div className="d-none d-md-block">
                <img src={logo3} alt="" className="mx-4" />
              </div>
              <div className="d-none d-lg-block">
                <img src={logo4} alt="" className="mx-4" />
              </div>
              <div className="d-none d-lg-block">
                <img src={logo5} alt="" className="mx-4" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
