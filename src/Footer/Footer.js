import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="text-dark  background-image-footer">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-12 p-5 text-hover">
                        <h2>Get The App</h2>
                        <img className="border rounded-3 w-50 m-2 " src="https://i.ibb.co/XD1gK0R/androidget.png" alt="" />
                        <br />
                        <img className="border rounded-3 w-50 m-2 " src="https://i.ibb.co/6Zdr7DD/appstore.png" alt="" />
                    </div>
                    <div className="col-lg-8 col-12 align-items-center">
                        <ul className="text-hover text-end">
                            <li className="d-inline-block p-3"><p >Download Now</p></li>

                            <li className="d-inline-block p-3"><p >License</p></li>
                        </ul>
                        <br />
                        <ul className="text-hover text-end">
                            <li className="d-md-inline-block d-block p-3 "><p>Home</p></li>
                            <li className="d-md-inline-block d-block p-3 "><p>Services</p></li>
                            <li className="d-md-inline-block d-block p-3 "><p>About</p></li>
                            <li className="d-md-inline-block d-block p-3 "><p>Help</p></li>
                            <li className="d-md-inline-block d-block p-3 "><p>Privacy Policy</p></li>
                        </ul>
                    </div>

                </div>
                <p className=" text-center px-5 ">© Holiday.com - All rights reserved || Nafis ||</p>
            </div>
        </div>
    );
};

export default Footer;