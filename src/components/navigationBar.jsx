import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.svg";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 50;
    setIsScrolled(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={
        isScrolled
          ? "navbar-dark bg-dark  border-secondary border-bottom navbar-sticky"
          : "navbar-dark"
      }
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Solutions</Nav.Link>
            <Nav.Link href="#link">Details</Nav.Link>
            <Nav.Link href="#link">Expertise</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <span class="nav-item">
              <span class="fa-stack">
                <a href="https://facebook.com" target="_blank">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x text-white"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="https://twitter.com" target="_blank">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x text-white"></i>
                </a>
              </span>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
