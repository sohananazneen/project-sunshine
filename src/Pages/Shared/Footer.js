import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Year 
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-dark text-light'>
            <hr></hr>
            <div className="p-5">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h2>Sunshine Ed-Tech</h2>
                                    <small>copyright &copy; {year} All rights reserved.</small>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="d-flex justify-content-end">
                                <Nav className="ms-auto gap-4">
                                    <Link to=' '>Legal</Link>
                                    <Link to=' '>Terms of use</Link>
                                    <Link to=' '>Privacy policy</Link>
                                    <Link to=' '>Cookie policy</Link>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;