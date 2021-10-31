import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div>

            <div>
                <div className="bg-light">
                    <div className="bg-dark img-bg" >
                        <div className="container  p-5">
                            <div className=" row align-items-center gx-5 px-lg-5 ">
                                <div className="col-lg-7 cols-12 gy-5 ">
                                    <p className="fw-lighter text-start lh-1 text-light" id="header-top-p"> See the world.</p>
                                    <h1 className="text-light text-start "> Welcome to  <span className="text-color"> Holiday.com</span></h1>
                                    <p className="mt-3 w-100 text-start text-light fw-light text-justified">
                                        Back in 1989, two guys from Melbourne, Australia by the names of Darrell and Manch set off on an adventure to the other side of the world. They travelled to Africa and without air conditioning on their modified truck, they filled it with supplies, some beer, a bunch of aviator sunglasses, and some friends.

                                    </p>
                                    <Link to="/home" size="lg " style={{ textDecoration: 'none' }}><Button className="my-5 d-block btn-color2 mx-5 outline-none text-dark " size="lg" >
                                        More Details
                                    </Button></Link>
                                </div>
                            </div>

                        </div>

                    </div>





                    {/*  */}
                    <div className=" background-color">


                        <div className="row row-cols-1 p-3 align-items-center gx-5 py-5 gy-5 ">
                            <div className="container col-lg-6 p-5">
                                <h1 className="text-center text-color fw-bold">Our Goals</h1>
                                <p className="text-start">Holiday has come a long way since then, now giving over 100,000 travelers a year the opportunity to experience small group travel across all 7 continents. They use local transport, sleep in local accommodation from Cambodian stilt houses to Moroccan riads, and employ 100% local leaders. With three different adventure styles including basix, original and comfort, themes ranging from cycling trips to family holidays, and itineraries crafted with the perfect balance of must-see sights and free time, Travo caters to every type of traveller no matter their age, budget or adventure style.</p>
                            </div>
                            <div className="container col-lg-6">
                                <img src='https://i.ibb.co/sy158z1/cheerful-tourists-with-tablet-street.jpg' className="rounded-3 w-75" alt="" />
                            </div>
                        </div>

                        <div className="row row-cols-1 p-3  align-items-center gx-5 py-5 gy-5 ">
                            <div className="container col-lg-6">
                                <img src='https://i.ibb.co/m8Qz9Ym/hill-sea-view.jpg' className="w-75 rounded-3" alt="" />
                            </div>
                            <div className="container col-lg-6 p-5">
                                <h1 className="text-center text-color fw-bold">Our Commitments</h1>
                                <p className="text-start">
                                    HOliday has come a long way since then, now giving over 100,000 travelers a year the opportunity to experience small group travel across all 7 continents. They use local transport, sleep in local accommodation from Cambodian stilt houses to Moroccan riads, and employ 100% local leaders. With three different adventure styles including basix, original and comfort, themes ranging from cycling trips to family holidays, and itineraries crafted with the perfect balance of must-see sights and free time, Travo caters to every type of traveller no matter their age, budget or adventure style.</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;