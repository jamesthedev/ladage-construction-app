import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

// If the image file sits next to this component (src/components/Navbar/ladage-logo.jpg):

const AppNavbar: React.FC = () => {
  return (
    <div className="floating-nav container-xxl">
      <Navbar expand="lg" className="pillbar">
        <Container fluid>
          {/* Left: Brand with logo + text */}
          <Navbar.Brand href="./" className="fw-bold text-dark d-flex align-items-center brand">
            <img
              src= "./ladage-logo.jpg" 
              alt="Ladage Construction logo"
              className="brand-logo me-2"
            />
            <span className="brand-text">{/* populated in Navbar.css */}</span>
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="mainNav" className="ms-auto" />

          {/* Right: links (Home, Our Work, Contact Us) */}
          <Navbar.Collapse id="mainNav">
            <Nav className="ms-auto align-items-lg-center gap-lg-3">
              <Nav.Link href="./" className="text-dark fw-semibold text-nowrap">
                Home
              </Nav.Link>
              <Nav.Link href="./ourwork" className="text-dark fw-semibold text-nowrap">
                Our Work
              </Nav.Link>
              <a
                href="./contact"
                className="btn btn-accent rounded-pill px-4 py-2 fw-semibold w-100 w-lg-auto mt-2 mt-lg-0 text-nowrap"
              >
                Contact Us
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
