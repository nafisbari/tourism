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
                <Navbar bg="light" variant="light " sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={NavHashLink} to="/home#home">Holiday.com</Navbar.Brand>
                        <Navbar.Toggle />
                        <div className="icon-color mx-1">
                            <i className="fab fa-facebook" />
                        </div>

                        <div className="icon-color mx-1" >
                            <i className="fab fa-instagram" />
                        </div>

                        <div className="icon-color mx-1">
                            <i className="fab fa-twitter" />
                        </div>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mx-3">
                                <Nav.Link as={HashLink} to="/home" >Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/doctors#doctors">notfound</Nav.Link>
                                <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
                            </Nav>

                            {user?.email ?
                                <Button onClick={logOut} className="btn-color" variant=" mx-3">Logout <i class="fas fa-arrow-right"/></Button>
                                :
                                <Link to="/login"><Button className="btn-color" variant=" mx-3"><i class="fab fa-google" /> Login</Button></Link>}

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