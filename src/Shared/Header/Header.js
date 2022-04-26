import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Volunteer Network</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav className='d-flex align-items-center'>
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link href="#deets">Donation</Nav.Link>
                    <Nav.Link href="#deets">Event</Nav.Link>
                    <Nav.Link href="#deets">Block</Nav.Link>
                    <Nav.Link href="#deets">
                        <button className='btn btn-primary'>Register</button>
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        <button className='btn btn-secondary'>Admin</button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};

export default Header;