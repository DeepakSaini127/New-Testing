import React, { useContext } from 'react'
import { food_list } from '../assets/assets'
import { StoreContext } from './StoreContext'
import FoodItem from './FoodItem'



function FoodDisplay({catogery}) {
    const {food_list} = useContext(StoreContext)
    



  return (
    <div className='Food-Display' id='food-list'>
      <h1 className='text-3xl font-medium'>Top Dishes near you</h1>
      <div className="food-display-list  ">

        {food_list.map((item, index)=>{
             
          if(catogery==='All' || catogery===item.category){

            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
            
            
          }
            
            
        })}


      </div>
    </div>
  )
}

export default FoodDisplay
