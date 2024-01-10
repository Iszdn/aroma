import React from 'react'
import "./index.scss"
const ProductTable = () => {
  return (
    <div className='product-added'>
<div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>category</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th><img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp" alt="" /></th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ProductTable