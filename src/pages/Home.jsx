
import CategoryMenu from '../../components/CategoryMenu'
import FoodItem from '../../components/FoodItem'
import Navbar from '../../components/Navbar'
import Cart from '../../components/Cart'

import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItem />
    <Cart />
    </>
  )
}

export default Home
