import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Details: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/enroll">
                    <button className='btn btn-dark'>Enroll Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;