import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './More.css'

const More = () => {
    const { moreId, } = useParams();
    const [service, setService] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-escarpment-47368.herokuapp.com/services', data)
            .then((result) => {
                console.log(result)
                if (result.data.insertedId) {
                    alert('Thanks for your information');
                    reset();
                } else {
                    alert('Ooops!! Something went wrong. Please try again after sometime ');
                }

            })
    }

    useEffect(() => {
        fetch('https://thawing-escarpment-47368.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const details = service.filter(details => (details._id) == (moreId));
    console.log(details[0]);

    return (
        <div>
            <div className="img-bg">
                <h1 className="my- p-5 text-color">Tour Details</h1>
            </div>

            <div className="hover background-img-table p-5">
                <h2 className="text-color text-bold fw-bolder w-75 p-3 rounded-lg mx-auto">BOOK NOW!</h2>
                <div className="d-flex my-5">
                    <div className="bg-light rounded w-75 mx-5 p-5">
                        <h2 className="text-color text-start bg-dark px-3 py-1 rounded rounded-lg">
                            {details[0]?.name}
                        </h2>

                        <p className="text-start">{details[0]?.details2}</p>

                    </div>
                    <div className="mx-5 p-3">
                        <img src={details[0]?.img} className="w-100 rounded rounded-lg" alt="" />

                        <div className="my-5">
                            <Link to='/booking'><Button className="btn-color2 " variant=" mx-3"> Book Now <i className="fas fa-arrow-right" /> </Button></Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <hr className="my-5" />
                <div>
                    <h1 className="text-color">Can't Find What You're Looking for?</h1>
                    <h5>Feel free to suggest your choice </h5>
                </div>
                <div>

                    <form className="shipping-form1 " onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("Username")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />

                        {errors.email && <span className="error">This field is required</span>}

                        <input placeholder="City/Destination" defaultValue="" {...register("name")} />

                        <input placeholder="Image URL" defaultValue="" {...register("img")} />

                        <input placeholder="Description" defaultValue="" {...register("details1")} />
                        <input placeholder="Estimated Cost" defaultValue="" {...register("price")} />

                        <input placeholder="Your Contact Number" defaultValue="" {...register("phone")} />

                        <input type="submit" className="btn-color2" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default More
