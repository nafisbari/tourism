import axios from 'axios';
import React, { useEffect, useState } from 'react';
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


        //     fetch(uri)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //             setOrders(data)
        //         })
    }, [])

    return (
        <div>

        </div>
    );
};

export default MyOrders;