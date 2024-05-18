
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link,  useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  
  const { id } = useParams()
  const navigate = useNavigate()

  const [values,setValues] = useState({
    name : '',
    description: '',
    price: '',
})

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setValues(res.data))
      .catch(err => console.log(err))
  }, [id])

  const handleUpdate = (e)=>{
    e.preventDefault()  
    axios.put(`http://localhost:3000/products/${id}`, values)
    .then(result => {
    setValues(result.data)

      navigate ('/')
    })
    .catch( err => console.log(err))
  }

  return (
    <div className='mt-20 flex justify-center items-center '>
    <div className=' text-black flex justify-center items-center shadow-2xl md:w-[600px] w-[380px] bg-white rounded'>
          <form onSubmit={handleUpdate} >
              <h1 className=' text-center font-semibold text-gray-600 mb-8 mt-4'>Update Product</h1>
             
              <div className='mb-4 bg-slate-200 text-gray-500 rounded p-1'>
                  <label htmlFor="">Name:</label>
                  <input type="text"  placeholder='Enter name' 
          value={values.name}   onChange={e => setValues({...values,name:e.target.value})}
                  className=' outline-none p-2  bg-slate-200' 
                  />

              </div>
          
              <div className='mb-4 bg-slate-200 text-gray-500 rounded p-1'>
                  <label htmlFor="">Description:</label>
                  <input type="text" placeholder='Enter name'
                          value={values.description}    onChange={e => setValues({...values,description:e.target.value})}      
       className=' outline-none p-2  bg-slate-200' 
                  />

              </div>
              <div className='mb-4 bg-slate-200 text-gray-500 rounded p-1'>
                  <label htmlFor="">Price:</label>
                  <input type="text" placeholder='Enter name'
                     value={values.price}     onChange={e => setValues({...values,price:e.target.value})}
                  className=' outline-none p-2  bg-slate-200' 
                  />

              </div>
            <div className=' flex flex-col'>
            <button className='   font-semibold bg-red-900 p-2 mb-4 mt-6 rounded  w-72'>Update</button>
              <Link to='/' className='    font-semibold bg-lime-900 p-2 mb-4 rounded text-center w-72'>Back</Link>
              
            </div>
          </form>
    </div>
  </div>
  )
}

export default Update
