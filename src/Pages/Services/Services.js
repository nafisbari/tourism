import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://thawing-escarpment-47368.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="">
            <h1>Explore Now</h1>
            <Row xs={1} md={2} lg={3} className="g-3 mx-3 px-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>


    );
};

export default Services;