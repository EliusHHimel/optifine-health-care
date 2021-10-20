import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

const Appointment = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/fakeDatabase/main/doctorsdb.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className='mt-3'>
            <h1>Book an appointment with our experts</h1>
            <div className='row'>
                {
                    doctors.map(doctor => <Doctors key={doctor.key} doctor={doctor}></Doctors>)
                }
            </div>
        </div>
    );
};

export default Appointment;