import React, { useState } from 'react'
import { NavbarMenu } from '../../mockdata/data'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from '../ResponsiveMenu';
import { useNavigate } from 'react-router-dom';

 const Navbar = () => {
  const[open,setopen]=useState(false)
  const navigate =useNavigate();
  const handeSignIn=()=>{
    navigate('/LoginPage')
  }
  return (
    <>
    <nav>
     <div className=' flex justify-around items-center py-9 border w-[100%]'>
      
      <div className='text-2xl  flex items-center gap-2 font-bold Uppercase '>
       < FaDumbbell/>
       <p>Coders</p>
       <p className='text-orange-500'>Gym</p>
      </div>
     
      <div className='hidden md:block'>
        <ul className='flex items-center gap-6 text-gray-600'>
         {NavbarMenu.map((item)=>{
          return(
            <li key={item.id}><a href={item.link} className='inline-block py-1 px-3 hover:text-orange-500 font-semibold'>{item.title}
            </a>
            </li>
          )
         })}
        </ul>
      </div>
    
      <div className=' flex items-center gap-4'>
        <button className='text-2xl hover:bg-orange-500 hover:text-white rounded-full p-2 duration-200'>
          <CiSearch />
        </button>
        <button className='text-2xl hover:bg-orange-500 hover:text-white rounded-full p-2 duration-200'>
          <PiShoppingCartThin />
        </button> 
        <div >
        <button 
        className='hover:bg-orange-500 transform text-primary  font-semibold hover:text-white rounded-md border-2 border-primary
         px-6 py-2 duration-100 hidden md:block ' 
         onClick={handeSignIn}>Login</button>
        </div>
      </div> 
     </div>
     <div className='md:hidden' onCanPlay={()=>{
      setopen(!open)
     }}>
      <MdMenu className='text-4xl'/>
     </div>
     <ResponsiveMenu open={open}/>

   </nav>
    </>
   
  )
}
export default Navbar