import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    const uri = `https://thawing-escarpment-47368.herokuapp.com/orders?email=${email}`
    useEffect(() => {
        axios.get(uri).then((res) => {
            console.log(res.data)
            setOrders(res.data)
        })
        console.log(uri);
    }, [])

    //handle delete
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const uri = `https://thawing-escarpment-47368.herokuapp.com/orders/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Your order is deleted successfully')
                        const remainingOrders = orders.filter(orders => orders._id !== id);
                        setOrders(remainingOrders);
                    }
                    else {
                        alert('Operation could not be completed, please try again ')
                    }

                })
        }
    }

    return (

        <div className="background-img-table">
            <div className="container  p-5">
                <h1 className="text-color my-5">Your Orders</h1>
                <Table striped bordered hover size="sm" variant="success " className="rounded rounded-lg text-inf text-bold fw-bolder" responsive>
                    <thead>
                        <tr>
                            <th><h4 className="text-color">#ID</h4></th>
                            <th><h4 className="text-color">Name</h4></th>
                            <th><h4 className="text-color">Email</h4></th>
                            <th><h4 className="text-color">Address</h4></th>
                            <th><h4 className="text-color">City</h4></th>
                            <th><h4 className="text-color">Phone</h4></th>
                            <th><h4 className="text-color">Order Status</h4></th>
                            <th><h4 className="text-color">Cancel Order</h4></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(orders => (
                                <tr key={orders._id}>
                                    <td>{orders._id}</td>
                                    <td>{orders.name}</td>
                                    <td>{orders.email}</td>
                                    <td>{orders.address}</td>
                                    <td>{orders.city}</td>
                                    <td>{orders.phone}</td>
                                    <td className="text-success">{orders.status}</td>
                                    <td><Button onClick={() => handleDelete(orders._id)} className="btn-color">Delete</Button></td>

                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>


        </div>

    );
};

export default MyOrders;