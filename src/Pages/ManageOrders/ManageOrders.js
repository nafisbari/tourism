import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './ManageOrders.css'


const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://thawing-escarpment-47368.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    // delete function
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
                        alert('Deleted successfully')
                        const remainingOrders = allOrders.filter(orders => orders._id !== id);
                        setAllOrders(remainingOrders);
                    }
                    else {
                        alert('Operation not completed, please try again ')
                    }

                })
        }
    }


    return (
        <div className="background-img-table">
            <div className="container  p-5">
                <h1 className="text-color my-5">Manage All Orders</h1>
                <Table striped bordered hover size="sm" variant="success " className="rounded rounded-lg text-inf text-bold fw-bolder" responsive>
                    <thead>
                        <tr>
                            <th><h4 className="text-color">#ID</h4></th>
                            <th><h4 className="text-color">Name</h4></th>
                            <th><h4 className="text-color">Email</h4></th>
                            <th><h4 className="text-color">Address</h4></th>
                            <th><h4 className="text-color">City</h4></th>
                            <th><h4 className="text-color">Phone</h4></th>
                            <th><h4 className="text-color">Choose</h4></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map(orders => (
                                <tr key={orders._id}>
                                    <td>{orders._id}</td>
                                    <td>{orders.name}</td>
                                    <td>{orders.email}</td>
                                    <td>{orders.address}</td>
                                    <td>{orders.city}</td>
                                    <td>{orders.phone}</td>
                                    <td><Button onClick={() => handleDelete(orders._id)} className="btn-color">Delete</Button></td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>


        </div>
        // </div>)


    );
};

export default ManageOrders;