import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Booking.css'


const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-escarpment-47368.herokuapp.com/orders', data)
            .then((result) => {
                console.log(result)
                if (result.data.insertedId) {
                    alert('Order is placed successfully');
                    reset();
                } else {
                    alert('Ooops!! Something went wrong. Please try again after sometime ');
                }

            })
    }

    return (
        <div className="img-bg11 d-flex justify-content-between align-items-center">
            <div>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}

                    <input placeholder="Address" defaultValue="" {...register("address")} />

                    <input placeholder="City" defaultValue="" {...register("city")} />

                    <input placeholder="Phone Number" defaultValue="" {...register("phone")} />

                    <input value="pending" {...register("status")} type="hidden" />

                    <input type="submit" className="btn-color2" />
                </form>
            </div>
            <div>
                <img src="https://i.ibb.co/jfdy7y7/travel-around-world.jpg" className="w-75 rounded rounded-lg" alt="" />
            </div>


        </div>
    );
};

export default Booking;