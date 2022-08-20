import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event => {
        navigate('/signup');
    }
    return (
        <div className='container w-50 mx-auto mt-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                    Sign In
                </Button>
            </Form>
            {/* {errorElement} */}

            <p><Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}> Creat an account</Link> </p>

            {/* <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> */}
            {/* <SocialLogin></SocialLogin>
            <ToastContainer /> */}
        </div>
    );
};

export default Signin;