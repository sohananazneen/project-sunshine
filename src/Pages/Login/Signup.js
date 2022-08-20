import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
const Signup = () => {

    const navigate = useNavigate();
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    const navigateSignin = () => {
        navigate('/signin');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-2'>Please Sign Up</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

            </Form>


            <p>Already have an account? <Link to="/signin" className='text-primary pe-auto text-decoration-none' onClick={navigateSignin}>Please Sign In</Link> </p>

        </div>
    );
};

export default Signup;