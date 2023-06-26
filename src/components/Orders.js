import React, { useState } from 'react'
import { useEffect } from 'react';
import { db } from '../firebaseConfig';
import './Orders.css'
import Product from './Product';
import pr3 from '../assets/iphone-14.jpg';
import pr4 from '../assets/airpods-max.jpeg';
import pr5 from '../assets/oneplus-nord-ce.jpg';
import pr6 from '../assets/airpods.jpg';

function Orders() {

    const [orders, setOrders] = useState([]);
    
    // useEffect(() => {
    //     db.collection('users').doc(user?.uid)
    // }, [])

  return (
    <div className='orders'>
        <h1>Your order has been placed!</h1>
        <p>Thank you for shopping with us.</p>
        <div className="orders__continueShopping">
            <h3>Continue Shopping</h3>
            <div className="orders__moreProducts">
                <Product id="2000002" title="Apple Airpods Max - With Active Noise Cancellation 18 Hr+ Battery life (White)" price={45000} image={pr4} rating={4} />
                <Product id="2000003" title="Oneplus Nord CE 2 Lite 5G - 6GB RAM 128GB Storage (Graphite Black)" price={19000} image={pr5} rating={3} />
                <Product id="3000001" title="Apple Airpods Pro (3rd Generation) - With Active Noise Cancellation (White)" price={24000} image={pr6} rating={4} />
                <Product id="2000001" title="Apple iPhone 14 Pro - 4GB RAM 128GB Storage (Gold)" price={115099} image={pr3} rating={4} />
            </div>
        </div>
    </div>
  )
}

export default Orders