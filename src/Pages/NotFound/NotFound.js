import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mb-5">
            <h1 className="oops-text">Oops!</h1>
            <h1 className="not-found">404</h1>
            <h1 className="not-found"> Page Not Found</h1>
            <Link className="btn btn-danger mt-3" exact to="/">Back To Home Page</Link>
        </div>
    );
};

export default NotFound;