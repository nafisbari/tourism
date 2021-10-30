import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, img, details1, price } = props.service;

    return (
        <div>
            <Col>
                <Card border="dark" style={{ height: '530px' }} className="my-5 card-hover" >

                    <Card.Img variant="top" className="w-100 me-auto rounded" src={img} />

                    <div>
                        <Card.Body className="text-start">
                            <div>
                                <h2 className="">{name}</h2>

                                <p>{details1}</p>
                            </div>
                            <div>
                            <h3 className="text-color">$ {price}</h3>
                            </div>

                        </Card.Body>
                        <div>

                        </div>
                        <div className="card-footer-bg">
                            <div className="d-flex">
                                <div>
                                    <Link to={`/more/${_id}`}><Button className="btn-color1 " variant=" mx-3"> Read More <i className="fas fa-arrow-right" /> </Button></Link>

                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>




                </Card>

            </Col>

        </div>
    );
};

export default Service;