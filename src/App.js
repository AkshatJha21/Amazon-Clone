import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Login from "./components/Login"
import Payment from "./components/Payment.js"
import Orders from "./components/Orders.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_live_51MYE3LSFcbwZYfA0tUh4kG7ykiGKwHcGZIrOctVzEEONJTpo1kg7Rmmj4s4Zswn8GmQF9XDb0r4VDPOI14YT2Elv00T0DdUapK");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Only runs when app component loads
    auth.onAuthStateChanged(authUser => {
      // console.log('The User is >>> ', authUser);

      if (authUser) {
        //User logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //User logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
  <Router>
    <div className="app">
      <Routes>
        <Route exact path="/" element={[<Header />, <Home />]}/>
        <Route exact path="/checkout" element={[<Header />, <Checkout />]}/>
        <Route exact path="/orders" element={[<Header />, <Orders />]}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
