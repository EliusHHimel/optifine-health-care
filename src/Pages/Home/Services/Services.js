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
        <div className='container mt-3' id="services">
            <div><h1>Our Services</h1></div>
            <div className="row row-cols-1 row-cols-md-2 mt-3 g-4">
                {allServices.map(service =>
                    <Service key={service.id} service={service}></Service>
                )
                }
            </div>

        </div>
    );
};

export default Services;