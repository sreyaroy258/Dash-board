import React from 'react'
import { MdWindow } from "react-icons/md";
import BasicTable from '../Components/BasicTable';
import { faker } from '@faker-js/faker';
import { CiFilter } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import DynamicDropdown from './DynamicDropdown'

function generateData(numRows) {
  
 const data = []
  for (let i = 0; i < numRows; i++) {
    data.push({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      status: faker.helpers.arrayElement(['Active', 'Inactive']),
      role: faker.person.jobTitle(),
      team : faker.helpers.arrayElement(['Design Product Marketing'])
    });
  }
  return data;

  
}

const Table = ( ) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addmember'); // Navigates to the TargetPage
  };
  

  const data = React.useMemo(() => generateData(100), []); 

  return (
 
        <div className='flex justify-between bg-neutral-50'>
        <div className='w-56 h-[800px] mx-8 my-6 cursor-pointer' >
         <div>
       
           <div className='flex gap-4'>
            <div className='text-purple-700 text-3xl ' >
                <MdWindow />
                </div>
              <h2 className='text-purple-700 text-xl font-semibold '>Overview</h2>
           </div>
           <div className='flex gap-4 mt-4 '>
           <div className='text-3xl font-semibold '><MdWindow /></div>
           <h2 className='text-xl font-semibold '>People Dirctory</h2>
           </div>
         </div>
        </div>


        <div className='w-[1500px] h-[800px] border rounded-xl border-gray-400  mx-8 my-6 bg-white '>
         <div className='mb-8 mt-6 flex items-center justify-between'>
          <h2 className='text-xl font-bold mx-4'>Team members
          </h2>
          <p className='border-2 bg-purple-300 text-center mr-[800px]'>100</p>
          <div className='flex'>
           <input
            type='text'
            className='mx-2 my-1 border-2 border-slate-500 mr-16  h-10 text-center' 
            placeholder='search'  />

            <div className='text-4xl cursor-pointer mb-6' >
           <span><CiFilter  /> </span>  
            <div className='shadow'>
              <DynamicDropdown />
              </div> 
            </div>
           
            <button className='p-2 bg-purple-700 text-white rounded-md mx-4 mb-16'  onClick={handleClick} >
              + ADD MEMBER
            </button> 
           
          
        
          </div>
         </div>
           <BasicTable  data={ data } />
    
        </div>
            
    </div>
            
          
  
  )
}

export default Table