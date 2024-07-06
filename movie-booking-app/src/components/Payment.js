import React from 'react';
import axios from 'axios';

const Payment = ({ onPaymentSuccess }) => {
    const handlePayment = async () => {
        try {
           
            await axios.post('http://localhost:5000/api/payment', {
                
            });

            
            onPaymentSuccess();
        } catch (error) {
            console.error('Payment error:', error);
           
        }
    };

    return (
        <div>
            <h2>Payment</h2>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
