import React from 'react'
import "./index.scss"
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="nav">
     <div className="container">
    <nav id='navbar'>
       
<div className="logo">
    <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="" />
</div>
<div className="navigations">
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link>Shop</Link>
        </li>
        <li>
            <Link>Blog</Link>
        </li>
        <li>
            <Link>Pages</Link>
        </li>
        <li>
            <Link to="/add">Add</Link>
        </li>
    </ul>
</div>
<div className="icons">
<div className="icon">
    <span><IoIosSearch /></span>
    <span><AiOutlineShoppingCart /></span>
</div>
<div className="btn-nav btn">
    Buy Now
</div>
</div>
<div className="respons-icon">
    <span><FaBars /></span>
</div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar