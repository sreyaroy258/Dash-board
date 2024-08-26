import React from 'react'
import { MdWindow } from "react-icons/md";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-between bg-neutral-50'>
        <div className='w-56 h-[800px] mx-8 my-6' >
         <div>
           <div className='flex gap-4'>
            <div className='text-purple-700 text-3xl' >
                <MdWindow />
                </div>
     
       <h2 className='text-purple-700 text-xl font-semibold cursor-pointer'>Overview</h2> 
           </div>

           <div className='flex gap-4 mt-4 '>
           <div className='text-3xl font-semibold'><MdWindow /></div>
           <Link to='/table' >
           <h2 className='text-xl font-semibold cursor-pointer'>People Dirctory</h2> </Link>
           </div>
         </div>
        </div>


        <div className='w-[1500px] h-[800px] border rounded-xl border-gray-400  mx-8 my-6 bg-white'>
          <h1 className='text-4xl text-center mt-56'>Welcome , John Doe ......!</h1>
        </div>
    </div>
  )
}

export default Home