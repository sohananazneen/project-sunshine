import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <Col md={3} className="mb-4">
            <Card>
                <Card.Img variant="top" src={img} className="img-fluid rounded" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> Price: ${price} </strong></Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="dark" onClick={() => navigateToServiceDetail(id)}>Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;