import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
import FlipMove from 'react-flip-move';
import pr1 from '../assets/iphone-14.jpg'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket 
                </h2>
                {/* <CheckoutProduct id="10000001" title="title of product goes here" image={pr1} price={1999} rating={5}/> */}
                
                {basket.map(item => (
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                ))}
            </div>
        </div>
        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout