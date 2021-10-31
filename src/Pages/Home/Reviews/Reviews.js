import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Reviews.css'





const Reviews = () => {
    return (
        <div className="review-bg-image p-3">
            <div className="my-5">
                <h4 className="text-center text-color ">Our Top</h4>
                <h1 className="text-center text-light">Latest Reviews</h1>
            </div>

            <Row xs={1} md={2} className="g-3 mx-3 px-3">
                <Col>
                    <Card border="dark" style={{}} className="my-5 card-hover px-5" >

                        <div className="d-flex justify-content-start align-items-center align-content-center  mt-3  mb-1 pt-5 ">
                            <div className="reviewers w-75 row">
                                <div className="col-sm-4"><img variant="top" className="w-75 me-auto rounded" src='https://i.ibb.co/Fx5zTx3/Richard-Bruke.png' alt="" /></div>
                                <div className="col-sm-8 mt-3 pt-1"> <h3 className="text-color text-start">Richard Bruke</h3></div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <hr className="" />
                        <div>
                            <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur temporibus deleniti ipsa recusandae. Nisi voluptatem a perspiciatis hic beatae, voluptatibus consequatur nulla similique sequi veniam, eaque cumque, fugiat rerum!</p>
                            <p className="text-color text-start">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </p>

                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card border="dark" style={{}} className="my-5 card-hover px-5" >

                        <div className="d-flex justify-content-start align-items-center align-content-center  mt-3  mb-1 pt-5 ">
                            <div className="reviewers w-75 row">
                                <div className="col-sm-4"><img variant="top" className="w-75 me-auto rounded" src='https://i.ibb.co/9y4KYnh/Danial-Stevens.jpg' alt="" /></div>
                                <div className="col-sm-8 mt-3 pt-1"> <h3 className="text-color text-start">Daniel Stevens</h3></div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <hr className="" />
                        <div>
                            <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur temporibus deleniti ipsa recusandae. Nisi voluptatem a perspiciatis hic beatae, voluptatibus consequatur nulla similique sequi veniam, eaque cumque, fugiat rerum!</p>
                            <p className="text-color text-start">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>

                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card border="dark" style={{}} className="my-5 card-hover px-5" >

                        <div className="d-flex justify-content-start align-items-center align-content-center  mt-3  mb-1 pt-5 ">
                            <div className="reviewers w-75 row">
                                <div className="col-sm-4"><img variant="top" className="w-75 me-auto rounded" src='https://i.ibb.co/MSGJvy0/Robert-Smith.jpg' alt="" /></div>
                                <div className="col-sm-8 mt-3 pt-1"> <h3 className="text-color text-start">Robert Smith</h3></div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <hr className="" />
                        <div>
                            <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur temporibus deleniti ipsa recusandae. Nisi voluptatem a perspiciatis hic beatae, voluptatibus consequatur nulla similique sequi veniam, eaque cumque, fugiat rerum!</p>
                            <p className="text-color text-start">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>

                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card border="dark" style={{}} className="my-5 card-hover px-5" >

                        <div className="d-flex justify-content-start align-items-center align-content-center  mt-3  mb-1 pt-5 ">
                            <div className="reviewers w-75 row">
                                <div className="col-sm-4"><img variant="top" className="w-75 me-auto rounded" src='https://i.ibb.co/XFHhGWC/Sarah-Jones.jpg' alt="" /></div>
                                <div className="col-sm-8 mt-3 pt-1"> <h3 className="text-color text-start">Sarah Jones</h3></div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <hr className="" />
                        <div>
                            <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur temporibus deleniti ipsa recusandae. Nisi voluptatem a perspiciatis hic beatae, voluptatibus consequatur nulla similique sequi veniam, eaque cumque, fugiat rerum!</p>
                            <p className="text-color text-start">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </p>

                        </div>
                    </Card>
                </Col>
            </Row>

        </div >
    );
};

export default Reviews;