import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import axios from "axios"
const FormAdd = () => {
   
    
async function addProduct(values) {
    const res=await axios.post("http://localhost:8000/",values)
    
}

    const SignupSchema = Yup.object().shape({
        image: Yup.string().required('Required'),
        title: Yup.string().required('Required'),
        price: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
    });

    return (
        <div className='formikk'>
            <h1>Add product</h1>
            <Formik
                initialValues={{
                    image: '',
                    title: '',
                    category:'',
                   price: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    addProduct(values)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="div"><Field name="image" placeholder="image" />
                        {errors.image && touched.image ? (
                            <div>{errors.image}</div>
                        ) : null}</div>
                        <div><Field name="title" placeholder="title"  />
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}</div>
                        <div><Field name="category" placeholder="category" />
                        {errors.category && touched.category ? (
                            <div>{errors.category}</div>
                        ) : null}</div>
                        <div><Field name="price" type="price" placeholder="price"  />
                        {errors.price && touched.price ? <div>{errors.price}</div> : null}
                        </div>
                        
                        
                        <button className='btn' type="submit">Add</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormAdd