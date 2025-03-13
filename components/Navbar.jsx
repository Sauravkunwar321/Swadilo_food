

import React from 'react'

const Navbar = () => {


  return (
    <nav className='flex flex-col items-center gap-3 md:flex-row justify-between mx-6 py-3 mb-10'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl font-bold'>Swadilo Foods</h1>

        </div>
        <div>
            <input type="search" name='search' placeholder='search' autoComplete='off' className='p-3 border border-gray-400 text-sm rounded-xl outline-none w-[50vw] sm:w-[75vw]  md:w-[20vw]'/>

        </div>
      
    </nav>
  )
}

export default Navbar
