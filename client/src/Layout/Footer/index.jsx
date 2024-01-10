import React from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import "./index.scss"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id='footer'>
Copyright ©2024 All rights reserved | This template is made with <span><TiHeartFullOutline /></span> by <Link>Colorlib</Link>
    </footer>
  )
}

export default Footer