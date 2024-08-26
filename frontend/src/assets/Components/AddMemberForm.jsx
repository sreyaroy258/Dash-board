import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { MdWindow } from "react-icons/md";
import { Link } from 'react-router-dom'

const schema = z.object({
    name:z.string().min(2),
    email : z.string().email(),
    role: z.enum(['manager' , 'developer' , 'designer'],{
        errorMap: () => ({ message: 'Role is required' }),
        profilePic: z.instanceof(File, 'File is required').refine(
          (file) => file.size <= 500000,
        ),
    }),
});


const AddMemberForm = () => {

  
  const [imagePreview, setImagePreview] = useState(null);

const { register , handleSubmit , watch,
formState : { errors},
reset
} = useForm({
    resolver : zodResolver(schema)
});

const onSubmit = (data) => {
    console.log(data);

    reset();

    setImagePreview(null);

}
const profilePic = watch('profilePic');

React.useEffect(() => {
  if (profilePic && profilePic[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(profilePic[0]);
  } else {
    setImagePreview(null);
  }
}, [profilePic]);


  return (

   


    <div className="form-container bg-slate-50">
     
    <h1 className="text-2xl font-bold mb-4 text-center mt-6">Add New Member</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    
   
     <div className='w-[700px] h-[700px] border-2 border-black rounded-xl translate-x-[610px]'>

       {/* Image Preview */}
       {imagePreview && (
          <div className="translate-y-10 translate-x-64">
            <p className="text-sm font-semibold">Image Preview:</p>
            <img src={imagePreview} alt="Profile Preview" className="w-32 h-32 object-cover mt-2 rounded-full" />
          </div>
        )}


         {/* Profile Picture Input */}
         <div className='flex items-center justify-center'>
          <div className='flex'>
          <label htmlFor="profilePic" className="block mb-1 py-1 px-1 border-2 border-gray-500 mr-12 translate-y-32">Change Photo</label>
          <label htmlFor="profilePic" className="block mb-1 py-1 px-1 border-2 border-gray-500  translate-y-32">Remove Photo</label>
          </div>
          <input
            id="profilePic"
            type="file"
            accept="image/*"
            {...register('profilePic')}
            className="input-field  translate-y-32 hidden"
          />
          {errors.profilePic && <p className="error-message">{errors.profilePic.message}</p>}
        </div>


               {/* Name Field */}
       <div className='flex items-center justify-center'>
      <div className='mt-64 flex items-center justify-center'>
        <label htmlFor="name" className="block mb-1 translate-y-[-35px]">Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="input-field  border-2 border-gray-500 py-4 px-4 rounded-t-md h-10"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
     
      <div className=' mt-64 flex items-center justify-center'>
        <label htmlFor="email" className="block mb-1 translate-y-[-35px] ">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="input-field  border-2 border-gray-500 py-4 px-4 rounded-t-md h-10 "
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>
      </div>

      <div className='flex items-center justify-center'>
      {/* Role Field */}
      <div className='flex items-center justify-center mt-20 gap-7 '>
        <label htmlFor="role" className="block mb-1 translate-y-[-35px] ">Role</label>
        <select
          id="role"
          {...register('role')}
          className="input-field  border-2 border-gray-500 py-4 px-4 rounded-t-md h-10 "
        >
          <option value="">Select a role</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          
        </select>
        {errors.role && <p className="error-message">{errors.role.message}</p>}
      </div>

      {/*status field */}
      <div className='flex items-center justify-center mt-20 ml-2' >
        <label htmlFor="status" className="block mb-1 translate-y-[-35px] ">Status</label>
        <select
          id="status"
          {...register('status')}
          className="input-field  border-2 border-gray-500 py-4 px-4 rounded-t-md h-10 "
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {errors.status && <p className="error-message">{errors.role.message}</p>}
      </div>
      </div>
          
        {/* Submit Button */}
       <div className='flex items-center justify-center mt-6'  >  
       <div className="flex space-x-4 items-center justify-center">
       <button type="submit" className="submit-button border-2 py-2 px-12 rounded-md border-black  ">Add Member</button>
          <button type="button" className="cancel-button border-2 py-2 px-12 rounded-md bg-slate-300" >
            <h2 className='text-xl font-bold'  >Cancel</h2>
          </button>
        </div>
     </div>
     
     </div>   
    </form>
      
    <div className=' mx-8 my-6 translate-y-[-700px]' >
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

  </div>
);
}

  

export default AddMemberForm