import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [values,setValues] = useState({
        name : '',
        description: '',
        price: '',
    })

    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const handleSumbit = (e)=>{
        e.preventDefault()  
        axios.post('http://localhost:3000/products',values)
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch( err => console.log(err))
      }


  return (
    <div className='mt-20 flex justify-center items-center '>
    <div className=' text-black flex justify-center items-center shadow-2xl md:w-[600px] w-[380px] bg-white rounded'>
          <form onSubmit={handleSumbit} >
              <h1 className=' text-center font-semibold text-gray-600 mb-8 mt-4'>Add Product</h1>
             
              <div className='mb-4 bg-slate-200 text-gray-500 rounded p-1'>
                  <label htmlFor="">Name:</label>
                  <input type="text"  placeholder='Enter name' 
                  onChange={e => setValues({...values,name:e.target.value})}
                  className=' outline-none p-2  bg-slate-200' 
                  />

              </div>
          
              <div className='mb-4 bg-slate-200 text-gray-500 rounded p-1'>
                  <label htmlFor="">Description:</label>
                  <input type="text" placeholder='Enter name'
                                 onChange={e => setValues({...values,description:e.target.value})}

       className=' outline-none p-2  bg-slate-200' 
                  />

              </div>
              <div className='mb-4 bg-slate-200 text-gray-500 rounded p-1'>
                  <label htmlFor="">Price:</label>
                  <input type="text" placeholder='Enter name'
                  onChange={e => setValues({...values,price:e.target.value})}
               
                  className=' outline-none p-2  bg-slate-200' 
                  />

              </div>
            <div className=' flex flex-col'>
            <button className='  to-gray-700 font-semibold bg-slate-600 p-2 mb-4 mt-6 rounded  w-72'>Create</button>
              <Link to='/' className='   to-gray-700 font-semibold bg-slate-600 p-2 mb-4 rounded text-center w-72'>Back</Link>
              
            </div>
          </form>
    </div>
  </div>
  )
}

export default Create
























