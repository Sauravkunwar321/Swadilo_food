import Foodcard from './Foodcard'
import FoodData from '../src/Data/FoodData'

import React from 'react'

const FoodItem = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {
            FoodData.map((food) => {
                return <Foodcard key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img={food.img}/>

            })
        }
        

    </div>
  )
}

export default FoodItem
