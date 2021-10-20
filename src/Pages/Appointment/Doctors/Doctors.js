import React from 'react';
import { Link } from 'react-router-dom';

const Doctors = (props) => {
    const { name, img, salary, role, key } = props.doctor;
    return (

        <div className="col mt-2">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title fw-bold">{name}</h3>
                    <p className='fw-bold'>{role}</p>
                    <p className="card-text">Fee: {salary}</p>
                    <Link className='btn btn-info' to={`/book/${key}`}>Book Appointment</Link>
                </div>
            </div>
        </div>

    );
};

export default Doctors;