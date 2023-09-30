import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';


const Home = () => {
  return (
    <div className='top_banner'>
      <div className="container">
        <div className="detail">
          <h2>The Best Note Book Collection 2023</h2>
            <Link to="/product">Shop Now <FaArrowRight /></Link>
        </div>
        <div className="img_box">
          <img src="./img/slider-img.png" alt="sliderImg" />
        </div>
      </div>
    </div>
  )
}

export default Home