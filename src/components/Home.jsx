import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
    const[products]=useContext(ProductContext)
    const {search}=useLocation();
    const category=decodeURIComponent(search.split('=')[1])
    // console.log(category)
    // console.log(products)
    const [filteredproducts,setfilteredproducts]=useState(null)
    const getprroductcategory = async()=>{
        try{
            const {data}= await axios.get(`/products/category/${category}`)
            setfilteredproducts(data)
        }
        catch(err){
            console.log(err)
        }
}
    useEffect(()=>{
        if(!filteredproducts||category=='undefined') setfilteredproducts(products)
        if(category!='undefined') getprroductcategory();
    },[category,products])
  return (products?
  <>
        <Nav/>
      <div className='w-[85%] flex flex-wrap overflow-x-hidden  overflow-y-auto justify-center gap-5 pt-12'>

      { filteredproducts && filteredproducts.map((p,i)=>{
       return  <Link key={p.id} to={`/detail/${p.id}`}className='card p-3 w-[18%] border h-[30vh] flex flex-col '>
        <div style={{backgroundImage:`url(${p.image})`}} className= ' hover:scale-110 transition-all 2 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'>
        </div>
        <h1 className='hover:text-blue-400 text-sm'>{p.title}</h1>
      </Link>
      })}
      
      </div>
      </>:
      <Loading/>
  )
}

export default Home
