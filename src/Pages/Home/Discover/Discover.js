import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Discover.css'

const Discover = () => {
    return (
        <div>
            <div className="background-img-discover p-5 my-5">
                <h4 className="text-color">Go & Discover</h4>
                <h1 className="text-light">The BreathTaking Cities</h1>
                <div className=" mx-auto my-5" >

                    <a href="https://youtu.be/IQVdvGRkfKs" target="_blank" rel="noreferrer noopener"> <img src="https://i.ibb.co/BBX8XQm/taj.jpg" className="img-fluid w-75 rounded rounded-lg" alt="" /></a>

                </div>

            </div>
            <div className="container mb-5">

                <Row lg={1}>
                    <CardGroup>
                        <Card className="background p-3">
                            <Row lg={1} className="">
                                <Col lg={4} className="  mt-3 pt-3" >

                                    <div className="bg-light rounded rounded-lg py-3"><i className="fas fa-store-alt text-color icon1"></i></div>


                                </Col>
                                <Col lg={8} className="py-3">
                                    <Card.Body>
                                        <h4 className="text-start">Shops & Boutique</h4>
                                        <p className="text-start">Vivamus semper ultricies leo. eget vulputate.</p>

                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="background p-3">
                            <Row lg={1} className="">
                                <Col lg={4} className="  mt-3 pt-3" >

                                    <div className="bg-light rounded rounded-lg py-3"><i className="fas fa-utensils icon1 text-color"></i></div>


                                </Col>
                                <Col lg={8} className="py-3">
                                    <Card.Body>
                                        <h4 className="text-start">Restaurants</h4>
                                        <p className="text-start">Vivamus semper ultricies leo. eget vulputate.</p>

                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="background p-3">
                            <Row lg={1} className="">
                                <Col lg={4} className="  mt-3 pt-3" >

                                    <div className="bg-light rounded rounded-lg py-3"><i className="fas fa-map-marker-alt text-color icon1"/></div>


                                </Col>
                                <Col lg={8} className="py-3">
                                    <Card.Body>
                                        <h4 className="text-start">Sightseeing</h4>
                                        <p className="text-start">Vivamus semper ultricies leo. eget vulputate.</p>

                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </CardGroup>
                </Row>

            </div>
        </div>

    );
};

export default Discover;