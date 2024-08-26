import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoArrowUpSharp } from "react-icons/io5";


const MemberDetails = ( ) => {

  return (

    

    <div className='flex items-center justify-center'   >
      <div className='border-2 w-[600px] h-[650px] translate-y-36'>
        <header className='bg-blue-900'>
         <img src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?cs=srgb&dl=pexels-pixabay-68507.jpg&fm=jpg"  className='w-[50px] h-[50px] rounded-full translate-x-36 translate-y-4 '/>
         <h2 className='flex items-center justify-center text-white'>OLIvia Rhye</h2>
         <div className='text-white text-xl translate-x-[500px] translate-y-[-50px]  cursor-pointer'  ><RxCross2 /> </div>  
         <div className='flex items-center justify-center gap-10'>
           <div className='mb-6'>
           <p className='text-white'> @olivia</p>
           < p className='text-white'>USERID</p>
           </div> 
              <p className='text-white text-xl'> || </p>
             <div className='mb-6'> 
             <p className='text-white'   >Product designer</p>
             <p className='text-white'  > Role</p>
             </div>
         </div>
        </header>

        <div>
              <h2 className='bg-slate-300 m-2 text-lg p-1'>Personal Information</h2>
              <hr />
              <div className='p-2' >
              <p className=''>DOB   :  <span className='text-slate-500 ml-24'> 20-4-2005</span>     </p>
              <hr />
              <p>Gender  : <span className='text-slate-500 ml-24 '> Female </span>  </p>
              <hr />
              <p>Nationality : <span className='text-slate-500 ml-24 '  >Indian </span>  </p>
              <hr />
              <p>Contact   : <span className='text-slate-500 ml-24 ' >  168361891 </span>   </p>
              <hr />
              <p>E-mail Address  :  <span className='text-slate-500 ml-24 ' >  olivia@gmail.com </span>  </p>
              <hr />
              <p>Company e-mail  :   <span className='text-slate-500 ml-24 ' >  olivia@gmail.com </span>   </p>
              <hr />
              </div>

              <h2 className='bg-slate-300 m-2 text-lg p-1'>Research & Publication</h2>
               <div>
                <h3 className='p-2 text-xl'>AI and User experience : The Future Design </h3>
                <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dicta ipsum placeat voluptate sed illo non,<br /> quis maiores exercitationem. Fugiat facilis iste, ducimus quasi pariatur itaque minima! Tenetur, obcaecati dolores.</p>
               </div>
        </div>

          <button className='p-2 text-orange-500'> 
            <IoArrowUpSharp />
          See Publication</button>


          </div>


          
         </div>
          
  )
 

     
  
}

export default MemberDetails