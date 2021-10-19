import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const { signInUsingGoogle, signInUsingGitHub, registrationHandler, handleEmail, handlePassword, handleName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/'
    const handleGoogleSignUp = () => {
        signInUsingGoogle()
            .then(userData => {
                history.push(redirectURI);

            })
    }
    const handleGitHubSignUp = () => {
        signInUsingGitHub()
            .then(userData => {
                history.push(redirectURI);

            })
    }
    return (
        <div className="login-container">
            <div>
                <h1>Create a new account</h1>
                <form onSubmit={registrationHandler}>
                    <center>
                        <div className="input-group mb-3 w-25">
                            <span className="input-group-text" id="basic-addon1">Name: </span>
                            <input onChange={handleName} type="text" className="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3 w-25">
                            <span className="input-group-text" id="basic-addon1">Email: </span>
                            <input onChange={handleEmail} type="email" className="form-control" placeholder="Enter your email" aria-label="email" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3 w-25">
                            <span className="input-group-text" id="basic-addon1">Email: </span>
                            <input onChange={handlePassword} type="password" className="form-control" placeholder="Enter your password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <input type="submit" value="Sign Up" className='btn btn-warning border' />
                    </center>
                </form>
                <p className='mt-3 fw-bold'>Already registered?</p>
                <Link to="/login" className='btn btn-primary border btn-sm'>Login to your account</Link>
                <div className='my-3'>-----------------Or-----------------</div>
                <center>
                    <button onClick={handleGoogleSignUp} className="btn border btn-danger d-block mb-1">Sign Up With Google</button>
                    <button onClick={handleGitHubSignUp} className="btn border btn-dark">Sign Up With GitHub</button>
                </center>
            </div>
        </div>
    );
};

export default Signup;