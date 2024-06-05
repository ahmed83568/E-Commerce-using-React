import React from 'react'
import { Routes,Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'

const App = () => {
  const{search,pathname} =useLocation()
  return (
    <div className='w-full h-screen flex'>
    {(pathname!='/' ||search.length>0) && <Link to='/' className='text-red-400 absolute top-2 left-[16%] text-2xl mb-10'>Home</Link>}
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    
    
    
    </div>
  )
}

export default App
