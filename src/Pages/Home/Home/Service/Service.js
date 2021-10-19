import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className="col-lg-6 col-md-4 g-4">
            <img src={img} alt="" className='img-fluid' />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link className='btn btn-info' to={`/details/${id}`}>View Details</Link>
        </div>
    );
};

export default Service;