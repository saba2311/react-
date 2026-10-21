import React, { useState } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';

const RBModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="py-4">
      {/* Subscribe Button to trigger Modal */}
      <Button 
        variant="primary" 
        onClick={handleShow}
        className="d-flex align-items-center gap-2"
      >
        Subscribe
      </Button>

      {/* Newsletter Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0 pb-0" />
        <Modal.Body className="px-4 pb-4 pt-0">
          <h4 className="fw-bold mb-2">Don't miss out</h4>
          <p className="text-muted small mb-4">
            Signup for our newsletter to stay upto date.
          </p>
          
          <Form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
            <Form.Control 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-light border-0 py-2"
            />
            <Button variant="outline-secondary" type="submit" className="px-3 text-dark border">
              Subscribe
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default RBModal;