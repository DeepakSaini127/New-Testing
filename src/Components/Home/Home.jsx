import React, { useState } from 'react'
import Hader from '../Hader'
import Explore from '../Explore'
import FoodDisplay from '../FoodDisplay'
 
import ForMobile from '../ForMobile'

function Home() {
    let[catogery, setCatogery] = useState('All')
  return (
    <div className='Home-Page'>
         <Hader/>
        <Explore catogery={catogery} setCatogery={setCatogery}/>
        <FoodDisplay catogery={catogery}/>
       <ForMobile />

    </div>
  )
}

export default Home
