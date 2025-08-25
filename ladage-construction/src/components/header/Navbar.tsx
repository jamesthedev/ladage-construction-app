import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Squash as Hamburger } from "hamburger-react";
import "./Navbar.css";

const AppNavbar: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  // close the menu after clicking a link (mobile)
  const close = () => setExpanded(false);

  return (
    <div className="floating-nav container-xxl">
      <Navbar
        expand="lg"
        className="pillbar"
        expanded={expanded}
        onToggle={(val) => setExpanded(!!val)}
      >
        <Container fluid className="ladage-nav-container">
          {/* Left: Brand with logo + text */}
          <Navbar.Brand href="./" className="fw-bold text-dark d-flex align-items-center brand ladage-branding">
            <img
              src="./ladage-logo-transparent-notext.png"
              alt="LC logo"
              className="brand-logo me-2"
            />
            <span className="brand-name">LADAGE CONSTRUCTION</span>
            <span className="brand-name-short">LADAGE CONST.</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="mainNav"
            aria-label="Toggle navigation"
            className="ms-auto custom-toggle mobile-hamburger"
          >
            <Hamburger
              toggled={expanded}
              toggle={setExpanded}
              size={22}
              duration={0.25}
              color="#2b2b2b"
              rounded
            />
          </Navbar.Toggle>

          {/* Right: links */}
          <Navbar.Collapse id="mainNav">
            <Nav className="ms-auto align-items-lg-center gap-lg-3">
              <Nav.Link href="./" onClick={close} className="text-dark fw-semibold text-nowrap">
                Home
              </Nav.Link>
              <Nav.Link href="./gallery" onClick={close} className="text-dark fw-semibold text-nowrap">
                Gallery
              </Nav.Link>
              <a
                href="./contact"
                onClick={close}
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
