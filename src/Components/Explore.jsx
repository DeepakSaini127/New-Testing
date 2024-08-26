import React from 'react'
import { menu_list } from '../assets/assets'


const Explore = ({catogery, setCatogery}) => {

   
  return (
    <div className='Explore-menu flex flex-col gap-4' id='Explore-menu'>
      <h1 className='text-3xl font-medium'>Explore Our Menu</h1>
      <p className='Explore-menu-text w-[50%] text-zinc-500'>Choose from a diverse menu featuring a delectable array of dishes, our mission is to satisfy your craving  and elevate your dining experence.</p>
        <div className="explore-menu-list flex justify-between items-center gap-7 overflow-x-scroll">
           
            {menu_list.map((item, index)=>{
                
                return(
                    <div onClick={()=>setCatogery(prev=>prev===item.menu_name? 'All' : item.menu_name)} className="explore-menu-list-item flex flex-col justify-center items-center gap-4 cursor-pointer" key={index}>
                        <img className={` w-[100px] ${catogery===item.menu_name ? 'border-2 border-red-400 p-1 rounded-full' : ' '}  `} src={item.menu_image} alt="" />
                        <h1 className='text-xl text-zinc-500'>{item.menu_name}</h1>
                    </div>
                )
                
                 
            })}
        </div>
        <hr className='w-full h-[3px] my-4 bg-zinc-400 border-none' />
    </div>
  )
}

export default Explore
