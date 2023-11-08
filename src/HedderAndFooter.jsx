import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const HedderAndFooter = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/custom">Custom</Nav.Link>
            <Nav.Link href="/card">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
}

export default HedderAndFooter;
