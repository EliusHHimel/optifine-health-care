import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (

        <div className="col mt-2">
            <div className="card">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link className='btn btn-info' to={`/details/${id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;