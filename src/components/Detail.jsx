import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

const Detail = () => {
   const [product,setproduct]= useState(null)
 const {id}=useParams();
    console.log(id)
    const getsingleproduct=async () =>{
        try{
            const {data} = await axios.get(`/products/${id}`)
            setproduct(data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() =>{
        getsingleproduct()
    },[])
  return (product?
    
    <div className='w-[80%] h-screen container mx-auto p-[10%] flex items-center justify-center gap-5'>
    <img className='h-[60%]  object-contain' src={`${product.image}`} alt="" />
        <div className='content mr-3 h-[50%] w-[50%] p-3'> 
            <h1 className='text-2xl mr-3 mb-2'>{product.title}</h1>
            <h3 className='mb-2 text-sm'>{product.category}</h3>
            <h2 className='mb-1 text-xl text-red-500'>${product.price}</h2>
            <p className='mb-4'>{product.description}</p>
            <Link className='py-2 px-4 border-blue-300 text-blue-300 border mr-3'>Edit</Link>
            <Link className='py-2 px-4 border-blue-300 text-red-300 border'>Delete</Link>
        </div>
      
    </div>:
    <Loading/>
  )
}

export default Detail;

