import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [allServices, setAllSerivces] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/fakeDatabase/main/optifinedb.json')
            .then(res => res.json())
            .then(data => setAllSerivces(data))
    }, [])

    return (
        <div className='container' id="services">
            <div><h1>Our Services</h1></div>
            <div className='row'>
                {allServices.map(service =>
                    <Service key={service.id} service={service}></Service>
                )
                }
            </div>

        </div>
    );
};

export default Services;