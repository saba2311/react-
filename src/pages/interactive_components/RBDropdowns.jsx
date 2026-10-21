import React from 'react';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';

const RBDropdowns = () => {
  return (
    <Container className="py-4">
      <Row className="g-4 align-items-center">
        
        {/* 1. Primary Solid Blue Dropdown */}
        <Col md={4}>
          <Dropdown defaultShow>
            <Dropdown.Toggle variant="primary" id="dropdown-1">
              Profile
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow-sm border">
              <Dropdown.Item href="#/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="#/notification">Notification</Dropdown.Item>
              <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* 2. Light Outline Dropdown */}
        <Col md={4}>
          <Dropdown defaultShow>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-2" className="bg-white text-dark">
              Profile
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow-sm border">
              <Dropdown.Item href="#/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="#/notification">Notification</Dropdown.Item>
              <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* 3. Avatar Dropdown (No Arrow at all) */}
        <Col md={4} className="text-end">
          <Dropdown defaultShow align="end" className="d-inline-block">
            <Dropdown.Toggle 
              bsPrefix="no-arrow" 
              id="dropdown-3" 
              style={{ cursor: 'pointer', background: 'transparent', border: 'none', padding: 0 }}
            >
              <img
                src="https://api.dicebear.com/7.x/lorelei/svg?seed=Mimi"
                alt="Avatar"
                className="rounded-circle border"
                width="36"
                height="36"
              />
            </Dropdown.Toggle>
            
            <Dropdown.Menu className="shadow-sm border text-start mt-2">
              <Dropdown.Item href="#/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="#/notification">Notification</Dropdown.Item>
              <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

      </Row>
    </Container>
  );
};

export default RBDropdowns;




