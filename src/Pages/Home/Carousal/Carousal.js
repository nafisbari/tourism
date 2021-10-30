import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Carousal.css'
const Carousal = () => {
    return (
        <div>
            <Carousel fade variant="dark">

                {/* 1 */}
                <Carousel.Item>

                    <div className="img-dark">
                        <img src={'https://i.ibb.co/4TQb3TF/rsz-3chair-table-dinning-beach-sea-with-blue-sky.jpg'}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption >
                        <div className="row ">
                            <div className="col-lg-8 banner-text">
                                <h1 className=" text-color text-start ">Travel & Explore the World</h1>
                                <p className="text-start text-light">abitur facilisis consectetur porttitor. Aenean eleifend quis nunc eget aliquet..</p>

                                <div className="d-flex ">

                                    <i className="fas fa-plane-departure icon "></i>
                                    <i className="fas fa-hotel icon"></i>
                                    <i className="fas fa-map-marked-alt icon"></i>
                                    <i className="fas fa-globe-europe icon"></i>
                                </div>
                                <div className="text-start">
                                    <Link to={`/more`}><Button className="btn-color3 mt-5 " variant=""> Read More <i className="fas fa-arrow-right" /> </Button></Link>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* 2 */}
                <Carousel.Item>

                    <div className="img-dark">
                        <img src={'https://i.ibb.co/X2krzyz/rsz-1slider-given-2.jpg'}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="row ">
                            <div className="col-lg-8 banner-text">
                                <h1 className=" text-color text-start ">Look & Feel the World</h1>
                                <p className="text-start text-light">abitur facilisis consectetur porttitor. Aenean eleifend quis nunc eget aliquet..</p>

                                <div className="d-flex ">

                                    <i className="fas fa-plane-departure icon "></i>
                                    <i className="fas fa-hotel icon"></i>
                                    <i className="fas fa-map-marked-alt icon"></i>
                                    <i className="fas fa-globe-europe icon"></i>
                                </div>
                                <div className="text-start">
                                    <Link to={`/more`}><Button className="btn-color3 mt-5 " variant=""> Read More <i className="fas fa-arrow-right" /> </Button></Link>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* 3 */}
                <Carousel.Item>

                    <div className="img-dark">
                        <img src={'https://i.ibb.co/xsPxJjK/rsz-slider-given-1.jpg'}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="row me-auto">
                            <div className="col-lg-8 banner-text">
                                <h1 className=" text-color text-start ">Relax & Enjoy the World</h1>
                                <p className="text-start text-light">abitur facilisis consectetur porttitor. Aenean eleifend quis nunc eget aliquet..</p>

                                <div className="d-flex ">

                                    <i className="fas fa-plane-departure icon "></i>
                                    <i className="fas fa-hotel icon"></i>
                                    <i className="fas fa-map-marked-alt icon"></i>
                                    <i className="fas fa-globe-europe icon"></i>
                                </div>
                                <div className="text-start">
                                    <Link to={`/more`}><Button className="btn-color3 mt-5 " variant=""> Read More <i className="fas fa-arrow-right" /> </Button></Link>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousal;