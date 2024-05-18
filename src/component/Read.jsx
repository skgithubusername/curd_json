
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col w-4/5 h-full justify-center p-6 shadow-2xl rounded mt-36'>
        <div className='mt-12  '>
          <strong >Name:  {data.name}</strong>
        </div>
        <div className='mt-6'>
          <strong>Description: {data.description}</strong>
        </div>
        <div className='mt-6'>
          <strong>Price: {data.price}</strong>
        </div>
        <div className='flex mt-16 justify-center'>
          <Link to={`/update/${id}`} className='font-semibold bg-red-900 mb-4 mt-6 p-2 rounded w-32 m-4 text-center'>Edit</Link>
          <Link to='/' className='font-semibold bg-lime-900 mb-4 mt-6 rounded text-center p-2 w-32'>Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Read
