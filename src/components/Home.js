import React from 'react'
import banner from '../assets/banner.jpg'
import './Home.css'
import Product from './Product'
import pr1 from '../assets/lean-startup.jpeg'
import pr2 from '../assets/iphone-13.jpg'
import pr3 from '../assets/iphone-14.jpg'
import pr4 from '../assets/airpods-max.jpeg'
import pr5 from '../assets/oneplus-nord-ce.jpg'
import pr6 from '../assets/airpods.jpg'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img src={banner} alt="" className='home__image'/>
        </div>
        <div className="home__row">
            <Product id="1000001" title="The Lean Startup - How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={299} image={pr1} rating={4} />
            <Product id="1000002" title="Apple iPhone 13 - 4GB RAM 128GB Storage (Black)" price={66000} image={pr2} rating={5} />
        </div>
        <div className="home__row">
            <Product id="2000001" title="Apple iPhone 14 Pro - 4GB RAM 128GB Storage (Gold)" price={115099} image={pr3} rating={4} />
            <Product id="2000002" title="Apple Airpods Max - With Active Noise Cancellation 18 Hr+ Battery life (White)" price={45000} image={pr4} rating={4} />
            <Product id="2000003" title="Oneplus Nord CE 2 Lite 5G - 6GB RAM 128GB Storage (Graphite Black)" price={19000} image={pr5} rating={3} />
        </div>
        <div className="home__row">
            <Product id="3000001" title="Apple Airpods Pro (3rd Generation) - With Active Noise Cancellation (White)" price={24000} image={pr6} rating={4} />
        </div>
    </div>
  )
}

export default Home