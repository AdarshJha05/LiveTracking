import React from 'react';
import axios from 'axios';

function Home() {
    const createOrder = async () => {
        try {
            const response = await axios.post('http://localhost:5000/orders/create', {  
                item: "Pizza"
            });
            window.location.href = `/track/${response.data._id}`;
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    return (
        <div className="home-container">
            <h1 className="home-title">Food Delivery App</h1>
            <button className="order-btn" onClick={createOrder}>
                Place Order
            </button>
        </div>
    );
}

export default Home;