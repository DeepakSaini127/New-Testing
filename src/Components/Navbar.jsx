import React, { useContext, useState } from 'react'
import '../assets/assets.js'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'
import { StoreContext } from './StoreContext.jsx'

function Navbar({setShowLogin}) {
  
    let[menu, setMenu] = useState('home')
    const {getTotalCardAmount} = useContext(StoreContext)
  return (
    <div className='Navbar flex justify-between items-center text-zinc-700'>
      <Link to='/'><img src={assets.logo} alt="Logo" width={150} className='cursor-pointer'/></Link>
      <ul className="nav-menu flex gap-10 font-medium text-[18px] cursor-pointer">
        <li onClick={()=>setMenu('home')} className={menu==='home' ? 'active' : ''}>Home</li>
        <li onClick={()=>setMenu('menu')} className={menu==='menu' ? 'active' : ''}>Menu</li>
        <li onClick={()=>setMenu('mobile app')} className={menu==='mobile app' ? 'active' : ''}>Mobile App</li>
        <li onClick={()=>setMenu('contact us')} className={menu==='contact us' ? 'active' : ''}>Contact us</li>
      </ul>
      <div className="nav-right flex justify-between items-center gap-10 cursor-pointer">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon relative">
            <Link to='/card' ><img src={assets.basket_icon} alt="Search icon" className=''/></Link>
            <div className={`dot  ${getTotalCardAmount()===0 ? "" : " w-[10px] h-[10px] rounded-full absolute top-[-8px] right-[-5px] bg-red-500"}`}></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className='px-4 py-2 border-2 bg-transparent border-red-500 rounded-full transform duration-300 ease-in-out hover:bg-red-100'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
