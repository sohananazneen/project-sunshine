import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from '../Shared/Loading';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateSignin = () => {
        navigate('/signin');
    }
    let errorElement;

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error || updateError) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
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
                {/* Terms & condition checkbox */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & conditions" onClick={() => setAgree(!agree)} name="terms" className={`ps-2 ${agree ? '' : 'text-danger'}`}
                    />
                </Form.Group>
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit" disabled={!agree}
                    value="Register">
                    Sign Up
                </Button>
            </Form>
            {errorElement}
            <p><Link to="/signin" className='text-primary pe-auto text-decoration-none' onClick={navigateSignin}>Please Sign In</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;