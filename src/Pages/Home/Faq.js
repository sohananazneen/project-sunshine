import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
const Faq = () => {
    return (
        <div className='my-4'>
            <Container>
                <hr></hr>

                <h2 className='text-center my-4'>FAQ</h2>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is Problems We Face through Bangladeshi curriculum?</Accordion.Header>
                                <Accordion.Body>
                                    Bangladeshi curriculum teaches only reading and writing.14% people lost their jobs due to lacking english speaking skills.Number 1 skill for career degrowth is miscommunication.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How to Solve the
                                    Problem?</Accordion.Header>
                                <Accordion.Body>
                                    Speak English, Speak English with Peer, Speak English with Peer under a Mentor
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do I creat an account?</Accordion.Header>
                                <Accordion.Body>
                                    To create an account, click on Sign Up at the top right side of the website and Fill up all the required information as indicated in the fields, then click submit button.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;