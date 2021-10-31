import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <>
                <Navbar bg="" className="background" variant="light " sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={NavHashLink} to="/home#home">
                            <img
                                src="https://i.ibb.co/5X3Nwk3/Screen-Shot-2021-10-31-at-5-27-57-PM-removebg-preview.png"
                                width="45"
                                height="35"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /> Holiday.com
                        </Navbar.Brand>

                        <Navbar.Toggle />
                        <div className="icon-color mx-1">
                            <i className="fab fa-facebook text-color" />
                        </div>

                        <div className="icon-color mx-1" >
                            <i className="fab fa-instagram text-color" />
                        </div>

                        <div className="icon-color mx-1">
                            <i className="fab fa-twitter text-color" />
                        </div>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mx-3">
                                <Nav.Link as={HashLink} to="/home" >Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
                                {user.email && <Nav.Link as={HashLink} to="/myOrders#myOrders">My Orders</Nav.Link>}
                                {user.email && <Nav.Link as={HashLink} to="/manageOrders#manageOrders">Manage All Order</Nav.Link>}
                            </Nav>

                            {user?.email ?
                                <Button onClick={logOut} className="btn-color3" variant=" mx-3">Logout <i className="fas fa-arrow-right" /></Button>
                                :
                                <Link to="/login"><Button className="btn-color3" variant=" mx-3"><i className="fab fa-google" /> Login</Button></Link>}

                            <Navbar.Text >
                                {user?.email && <p className="fw-bold"> {user?.displayName}</p>}
                            </Navbar.Text>



                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;