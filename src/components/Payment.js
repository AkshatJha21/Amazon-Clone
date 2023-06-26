import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { useNavigate } from 'react-router-dom';
import './Payment.css'
import { db } from '../firebaseConfig';

function Payment() {

    const navigate = useNavigate();

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Stripe secret (changes for every new transaction)

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("The Secret >>> ", clientSecret);

    const handleSubmit = async (event) => {
        // Submission handling
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ error, paymentIntent }) => {
            // paymentIntent = payment confirmation
            // if (error || !paymentIntent) {
            //     // handle error, tell the user
            //     // ...
            //     // return to exit code
            //     return;
            //   }
            // db
            //   .collection('users')
            //   .doc(user?.uid)
            //   .collection('orders')
            //   .doc(paymentIntent.id)
            //   .set({
            //       basket: basket,
            //       amount: paymentIntent.amount,
            //       created: paymentIntent.created
            //   })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true });
        })
    }
    const handleChange = event => {
        // Listen changes in CardElement and catch any error
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            {/* Delivery Address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>122 Belvedere Road</p>
                    <p>Silicon Valley, CA</p>
                </div>
            </div>
            {/* Review Basket */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                    ))}
                </div>
            </div>
            {/* Payment Details */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe Integration */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                        <CurrencyFormat 
                        renderText={(value) => (
                            <>
                                <h3>
                                    Order Total: &nbsp;
                                    <strong>{value}</strong>
                                </h3>
                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rs."}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment