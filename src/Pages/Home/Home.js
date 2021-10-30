import React from 'react';
import Services from '../Services/Services';
import Carousal from './Carousal/Carousal';
import Discover from './Carousal/Discover/Discover';
import './Home.css'
import WhyBooking from './WhyBooking/WhyBooking';

const Home = () => {
    return (
        <div>
            <div>
                <Carousal></Carousal>
            </div>
            <div>
                <Discover></Discover>
            </div>
            <div className="container">
                <h1 className="text-color text-center bg-light p-1 my-1">Best Offers </h1>
                <p className="text-center w-75 mx-auto">With a strong focus on fulfilling customer needs and service, we are the most trusted online travel brand. Every view and opinion is heard and respected. We talk to people not their designations. Great Peers We are a team of achievers. Our folks are ambitious, go getters, fun loving, aware and proactive</p>
                <Services></Services>
            </div>

            <div>
                <WhyBooking></WhyBooking>
            </div>
        </div>
    );
};

export default Home;