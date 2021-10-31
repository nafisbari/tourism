import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PopularTour.css'

const PopularTours = () => {
    return (
        <div className="my-5 container p-3">
            <h4 className="text-color">Our Most</h4>
            <h1 className="text-dark">Popular Destination</h1>
            <Row xs={1} md={2} lg={4} className="gx-3 mx-3 px-3">
                <Col>
                    <Card border="dark" style={{ height: '' }} className="my-5 card-hover" >

                        <Card.Img variant="top" className="w-100 me-auto rounded" src={'https://i.ibb.co/25LBbqJ/england.jpg'} />

                    </Card>
                    <h4 className="text-center">England</h4>
                </Col>
                <Col>
                    <Card border="dark" style={{ height: '' }} className="my-5 card-hover" >

                        <Card.Img variant="top" className="w-100 me-auto rounded" src={'https://i.ibb.co/k3J55nh/italy-2.jpg'} />

                    </Card>
                    <h4 className="text-center">Italy</h4>
                </Col>
                <Col>
                    <Card border="dark" style={{ height: '' }} className="my-5 card-hover" >

                        <Card.Img variant="top" className="w-100 me-auto rounded" src={'https://i.ibb.co/LnzdRnR/turkey.jpg'} />

                    </Card>
                    <h4 className="text-center">Turkey</h4>
                </Col>
                <Col>
                    <Card border="dark" style={{ height: '' }} className="my-5 card-hover" >

                        <Card.Img variant="top" className="w-100 me-auto rounded" src={'https://i.ibb.co/KGq8rbw/maldives-island.jpg'} />

                    </Card>
                    <h4 className="text-center">Maldives</h4>

                </Col>
                <div className="w-50 mx-auto my-5"><Link to='/services'><Button className="btn-color3 text-color " variant=" mx-3"> Read More <i className="fas fa-arrow-right" /> </Button></Link></div>

            </Row>

        </div>
    );
};

export default PopularTours;