import React from 'react'
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
         <div className='flex justify-between items-center px-8 py-6 bg-neutral-50'>
        <div>
          <h2 className='text-4xl font-bold text-purple-700'>PEOPLE.CO</h2>
        </div>

        <div className='flex justify-between items-center gap-4'>
             <div className='font-thin'>
             <FaRegBell />
             </div>
             <div>
            <img className='w-[35px] h-[35px] rounded-full' src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></div>
            <p>John Doe</p>
        </div>
      </div>

       <div>
       <hr />
      </div>

    </div>
  )
}

export default Navbar