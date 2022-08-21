import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from '../../Images/about.jpg'

const About = () => {
    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={5}>
                        <img
                            className="w-100 mt-4"
                            src={about}
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={8} lg={7}>
                        <div className='d-flex justify-content-center mt-5'>
                            <div>
                                <h2 className='fw-bolder'>About Us</h2>
                                <p>We have created a social learning platform, where students can learn and engage with their best-fit mentors, all over the country. Mentors can upload or share all types of academic information or free learning contents & build their own student community. Our smart recommendation system suggests students with their suitable contents and mentors. It is really difficult to hire people specially with a specific skill set.</p>
                                <p> Demand for Data Science is not going to go away in Bangladesh and its growing.Our aim is to help those who are serious about becoming programmer. Making their learning process enjoyable and effective. In this effort we are constantly learning new things, trying.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    );
};

export default About;