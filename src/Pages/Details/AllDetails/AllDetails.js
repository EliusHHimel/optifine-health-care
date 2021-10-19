import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const AllDetails = () => {
    const { serviceId } = useParams();
    const [allServices, setAllSerivces] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/fakeDatabase/main/optifinedb.json')
            .then(res => res.json())
            .then(data => setAllSerivces(data))
    }, []);

    const service = allServices.find(element => element.id === serviceId);
    const { name, img, description } = service;
    return (
        <div className="container mt-3">
            <img src={img} alt="" className='img-fluid' />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>

    );
};

export default AllDetails;