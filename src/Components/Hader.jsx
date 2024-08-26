import React from 'react'
import '../index.css'

const Hader = () => {
  return (
    <div className='Hader bg-img'>
      <div className="hader-content flex flex-col gap-4 w-[50%] justify-start items-start absolute bottom-10 left-20 text-white animation">
        <h1 className='text-5xl font-medium leading-normal'>Order your <br/> favourate food here</h1>
        <p className='text-base'>The purpose of this document is to present a detailed description of the Online Nearby Food Delivery System. It will explain the purpose and features of the system, the interfaces of the system, what the system will do, the constraints under which it must operate and how the system will react to external stimuli.</p>
        <button className='px-4 py-2 bg-white rounded-full text-black border-none font-medium'>View Menu</button>
      </div>
    </div>
  )
}

export default Hader
