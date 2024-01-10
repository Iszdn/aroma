import React from 'react'
import "./index.scss"
import { TfiCommentsSmiley } from "react-icons/tfi";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const NewsCard = () => {
  return (
    <div className='col-lg-4 col-md-6 col-12 newscard'>
<div className="img">
    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="" />
</div>
<div className="info">
  <div className="commentss">
    <p>By Admin</p>
    <p><span><TfiCommentsSmiley /> </span> 2 Comments</p>
</div>
<h4>The Shopping News also offers top-quality printing services</h4>
<p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
<Link><span>Read More</span> <span><IoArrowForward className='arrow' /></span></Link>
  </div>
  
    </div>
  )
}

export default NewsCard