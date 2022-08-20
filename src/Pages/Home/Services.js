import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Container, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
            <Container>
                <h2 className='text-center mt-4'>Our services </h2>
                <h4 className='text-center'>Please Choose From Our Recommended Courses</h4>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;