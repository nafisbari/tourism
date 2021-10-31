import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WhyBooking.css'

const WhyBooking = () => {
    return (
        <div className="my-5 p-3 background-image-why-booking d-lg-flex d-block">
            <div>
                <div className="my-3  px-5 pt-3">
                    <br />
                    <br />
                    <br />
                    <br />

                    <h4 className="text-color text-start">We're the Best</h4>
                    <h1 className="text-start">Why Booking With Us</h1>
                </div>
                <div className="my-5 px-5">
                    <p className="text-start py-3">With a strong focus on fulfilling customer needs and service,<br /> we are the most trusted online travel brand. Every view and opinion <br /> is heard and respected. We talk to people not their designations.</p>

                    <p className="text-start"><i className="far fa-thumbs-up text-color "></i> All placges and activiates are carefully picked by us</p>
                    <p className="text-start"><i className="fas fa-dollar-sign text-color "></i>  Best price we guaranteee & Hassle free!</p>
                    <p className="text-start"><i className="far fa-star text-color "></i> We are an award winning agency</p>
                    <p className="text-start"><i className="far fa-heart text-color "></i> Trusted by more than 80,000 customers</p>
                    <div className="my-5">
                        <br />
                        <p className="text-start "><Link to="/services"><Button className="btn-color3" variant=" mx-3">Learn More <i className="fas fa-arrow-right" /></Button></Link></p>
                    </div>


                </div>

                <br />
                <br />
                <br />
                <br />
            </div>
            <div>

            </div>
        </div>
    );
};

export default WhyBooking;