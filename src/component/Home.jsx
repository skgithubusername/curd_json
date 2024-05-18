import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link} from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaReadme } from "react-icons/fa6";
import axios from "axios";


function Home() {

    const [data,setData] = useState([])


    useEffect(()=>{

        axios.get('http://localhost:3000/products')
        .then( res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete =(id)=>{
      const confirm = window.confirm("Would you like to Delete")
      if(confirm){
        axios.delete(`http://localhost:3000/products/${id}`)
        .then( res => {
       window.location.reload();

        })
        .catch(err => console.log(err))
      }
    }


  return (
    <div className="flex  mt-20   justify-center items-center">
      <div className=" w-3/4 bg-white rounded  shadow-2xl p-3">
        <h1 className=" text-center text-gray-500 text-xl font-semibold mb-6">List of Products</h1>
        <Link to='/create' className=' flex justify-center items-center text-clip w-[100px] h-10 p-2 mb-2 bg-slate-500 rounded text-center '>Add <MdAdd /></Link>

        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                 ID
                </th>
                <th scope="col" className="px-6 py-3">
                 Name
                </th>
                <th scope="col" className="px-6 py-3">
                Description
                </th>
                <th scope="col" className="px-6 py-3">
                Price
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((d,i) => {
                return (<tr key={i} className='className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"'>
                    <td className="px-6 py-4">{d.id}</td>
                    <td className="px-6 py-4">{d.name}</td>
                    <td className="px-6 py-4">{d.description}</td>
                    <td className="px-6 py-4">{d.price}</td>
                    <td className="flex">
                    <Link to={`/read/${d.id}`}  className="px-4 py-3  mt-2">
                    <FaReadme />
                      </Link>
                      <Link to={`/update/${d.id}`}  className="px-4 py-3  mt-2">
                        <FaRegEdit />
                      </Link>
                      <button onClick={e => handleDelete(d.id)} className="px-4 py-3 mt-2">
                        <MdDelete />
                      </button>
                    </td>
                   
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home

