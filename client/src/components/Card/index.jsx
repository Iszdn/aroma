import React from 'react'
import "./index.scss"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Card = () => {
  return (
    <div className="product-card">
    <div className="img-pr">
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png" alt="" />
      <div className='icons-div'>
  <div className="icons">
  <span><IoIosSearch /></span>
      <span><AiOutlineShoppingCart /></span>
    <span><FaRegHeart /></span>
  </div>
      </div>
    </div>
    <div className="info">
        <p>Accessories</p>
        <h3>Quartz Belt Watch</h3>
        <span>$150.00</span>
    </div>
  </div>
  )
}

export default Card