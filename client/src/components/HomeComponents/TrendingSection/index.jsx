import React from 'react'
import "./index.scss"

import Card from '../../Card';
const Trending = () => {
  return (
    <section id='trending'>
      <div className="container">
       <div className="intro">
  <p>Popular Item in the market</p>
  <h2>
  Trending <span>Product</span>
  </h2>
</div> 
<div className="products row">
  <div className='col-xl-3 col-lg-4 col-md-6 col-12'>
<Card/>
  </div>


</div>
      </div>

    </section>
  )
}

export default Trending