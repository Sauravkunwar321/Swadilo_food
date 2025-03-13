import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6'>
      <h3 className='text-xl font-semibold '>Find the best food</h3>
      <div className='my-5 flex gap-3 flex-wrap'>
        <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-500 hover: text-white cursor-pointer '>All</button>
        <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-500 hover: text-white cursor-pointer'>Lunch</button>
        <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-500 hover: text-white cursor-pointer'>Breakfast</button>
        <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-500 hover: text-white cursor-pointer'>Dinner</button>
        <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-500 hover: text-white cursor-pointer'>Snacks</button>
        
        

      </div>
      
    </div>
  )
}

export default CategoryMenu
