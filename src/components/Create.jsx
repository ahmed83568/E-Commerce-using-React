import React, { useState } from 'react'

const Create = () => {
    const [title,settitle] =useState('');
    const [category,setcategory] =useState('');
    const [price,setprice] =useState('');
    const [desc,setdesc] =useState('');
    // const [title,settitle] =useState('');
  return (
    <div>
      <form action="" className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='text-2xl mb-5'>Add New Products</h1>
        <input type="text" placeholder='title' className='text-xl p-3 w-1/2
        mb-3' onChange={(e)=>settitle(e.target.value)} value={title}/>
      </form>
    </div>
  )
}

export default Create
