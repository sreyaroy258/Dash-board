import React from 'react'
import Navbar from '../src/assets/Components/Navbar'
import { Routes , Route } from 'react-router-dom'
import  Home  from './assets/Pages/Home'
import Table from './assets/Pages/Table'
import AddMemberForm from './assets/Components/AddMemberForm'
import MemberDetails from './assets/Components/MemberDetails'





const App = () => {
  return (
    <div>
    <Navbar />
    
    <Routes>
       <Route path='/'  element={<Home />} />
       <Route path='/table'  element={<Table/>}  />
       <Route path='/addmember' element={<AddMemberForm />}  /> 
       <Route path='/memberdetails'  element={<MemberDetails />}  /> 
     
     </Routes> 


     
    </div>
  )
}

export default App