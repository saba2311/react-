import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import { Globe, Envelope, Telephone, X } from 'react-bootstrap-icons';

const NavigationBar = () => {
  const [showContact, setShowContact] = useState(false);

  const handleClose = () => setShowContact(false);
  const handleShow = () => setShowContact(true);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="px-3 border-bottom shadow-sm">
        <Navbar.Brand href="#home" className="fw-bold bg-dark text-white px-2 py-1 rounded">
          RB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <NavDropdown title="Company" id="company-nav-dropdown">
              <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#infrastructure">Infrastructure</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <div className="d-flex align-items-center gap-2">
            <Button variant="primary" size="sm">Login</Button>
            <Button variant="outline-primary" size="sm">Sign Up</Button>
            <Button variant="dark" size="sm" onClick={handleShow}>Contact</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* Offcanvas Contact Drawer */}
      <Offcanvas show={showContact} onHide={handleClose} placement="end" backdrop={true}>
        <Offcanvas.Header className="border-bottom pb-3">
          <Offcanvas.Title className="fw-bold fs-5">Contact Us</Offcanvas.Title>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </Offcanvas.Header>
        
        <Offcanvas.Body>
          <h5 className="text-secondary mb-3 fs-6">We are here to help you!</h5>
          <hr className="text-muted" />
          
          <h6 className="fw-bold text-dark mb-3">Indixpert</h6>
          
          <div className="mb-3">
            <p className="mb-1 text-muted small">
              <Globe className="me-2" size={14} style={{ opacity: 0.7 }} /> 
              Our Offices :
            </p>
            <p className="mb-1 text-dark ps-4 small">1: Hyderabad, Telangana, India</p>
            <p className="mb-3 text-dark ps-4 small">2: Gurugram, Haryana, India</p>
          </div>

          <div className="mb-3">
            <p className="mb-1 text-muted small">
              <Envelope className="me-2" size={14} style={{ opacity: 0.7 }} /> 
              Email
            </p>
            <p className="mb-0 text-dark ps-4 small">contact@indixpert.com</p>
          </div>

          <div>
            <p className="mb-1 text-muted small">
              <Telephone className="me-2" size={14} style={{ opacity: 0.7 }} /> 
              Phone
            </p>
            <p className="mb-0 text-dark ps-4 small">(+91) 778 899 2897</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;








