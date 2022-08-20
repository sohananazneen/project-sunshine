import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg='light' >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h2>Sunshine Ed-Tech</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link as={Link} to="signin">Sign In</Nav.Link>
                        <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                        {/* {
                            user ?
                                <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>
                                :
                                <Nav.Link as={Link} to="login">
                                    Sign In
                                </Nav.Link>} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;