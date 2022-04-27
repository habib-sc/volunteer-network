import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Link className='text-decoration-none text-white' style={{marginRight: '10px'}} to='/'>Home</Link>
                    <Link className='text-decoration-none text-white' style={{marginRight: '10px'}} to='/'>Events</Link>
                    <Link className='text-decoration-none text-white' style={{marginRight: '10px'}} to='/'>Blogs</Link>
                    <Link className='text-decoration-none text-white' style={{marginRight: '10px'}} to='/login'>Login</Link>
                    <Link className='text-decoration-none text-white' style={{marginRight: '10px'}} to='/register'>Register</Link>
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