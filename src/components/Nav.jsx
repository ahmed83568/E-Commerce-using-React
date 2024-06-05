import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const[products]=useContext(ProductContext)
  let distint_category=products&&products.reduce((acc,cv) =>[...acc,cv.category],[])
  distint_category=[...new Set(distint_category)]
  // console.log(distint_category)

  const color=()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  }
  console.log(color())
  return (
     
      <nav className='w-[15%] bg-zinc-100 h-full flex flex-col items-center pt-10 '>
      <a href='/create' className='py-2 px-4 border-blue-300 text-blue-300 border' >Add New Products</a>
      <hr className='w-[80%] my-3' />
      <h1 className='text-2xl mb-3 w-[80%]'>Category</h1>
      <div className=' w-[80%] mt-3'>
      {distint_category.map((c,i)=>(

        <Link  key={i} to={`/?category=${c}`} className=' mb-3 flex items-center gap-2'><span style={{backgroundColor:color()}} className='block w-4 h-4 rounded-full'></span>{c}</Link>
      ))}
        
        
      </div>
    </nav>
  
  
  )
}

export default Nav
