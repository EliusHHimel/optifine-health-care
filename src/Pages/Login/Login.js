import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleEmail, handlePassword, signInUsingGoogle, loginHandler, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/'

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(userData => {
                history.push(redirectURI);

            })
    }
    const handleGitHubSignIn = () => {
        signInUsingGoogle()
            .then(userData => {
                history.push(redirectURI);

            })
    }


    return (
        <div className="login-container mb-3">
            <div>
                <h1 className='mt-4'>Login to your account</h1>
                <form onSubmit={loginHandler} className='mt-4'>
                    <center>
                        <div className="input-group mb-3 w-25">
                            <span className="input-group-text" id="basic-addon1">Email: </span>
                            <input onChange={handleEmail} type="email" className="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3 w-25">
                            <span className="input-group-text" id="basic-addon1">Password: </span>
                            <input onChange={handlePassword} type="password" className="form-control" placeholder="Enter your password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </center>

                    <p className="text-danger">{error}</p>
                    <input type="submit" className="btn border btn-warning" value="Login" />
                </form>
                <p className='mt-2 fw-bold'>Are you a new user?</p>
                <Link to="/signup" className='btn border btn-primary btn-sm'>Create new Account</Link>
                <div className='my-3'>-------Or--------</div>
                <center>
                    <button onClick={handleGoogleSignIn} className="btn border btn-danger d-block mb-1">Login With Google</button>
                    <button onClick={handleGitHubSignIn} className="btn border btn-dark">Login With GitHub</button>
                </center>
            </div>
        </div>
    );
};

export default Login;