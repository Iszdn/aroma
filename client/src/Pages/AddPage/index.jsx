import React from 'react'
import FormAdd from '../../components/AddpageComponents/Formik'
import ProductTable from '../../components/AddpageComponents/Addedproducts'

const AddPage = () => {
  return (
    <div className='container'>
<FormAdd/>
<ProductTable/>
    </div>
  )
}

export default AddPage