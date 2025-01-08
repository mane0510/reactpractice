import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Register from './Register';




const LoginPage = () => {
const[islogin,setIsLogin]=useState(true)


  return (
    <div className='bg-stone-800 grid min-h-screen py-4 hover:brightness-[100%]' >
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl'>
            <div className='mt-4'>
              <h1 className='text-2xl font-semibold text-black border-b-2  border-slate-900 '>Login</h1>
            </div>
            <div  className='mt-8'>
            <TextField 
            label="email" variant="outlined" 
            className='w-[300px]  bg-transparent border-0 outlined-none h-10 placeholder:text-slate-600'/>
            </div>
            <div className='mt-8' >
            <TextField label="password" variant="outlined"  
            className=' w-[300px] bg-transparent border-0 outlined-none h-10 placeholder:text-slate-600'/>
            </div>
            <div className='mt-7 flex gap'> 
            <input id="default-checkbox" type='checkbox' className=' rounded-lg ml-11 w-4 h-4  rounded-lg ml-11 w-4 h-4 border-gray-300 focus:rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
            <label for="default-checkbox" className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 '>RememberME</label>
              <h1 className='text-left text-sm hover:text-cyan-700 ml-5  ml-20 gap-6'><a href='#' ></a>Forgot Password?</h1>
              
            </div>
            <div className='mt-6' >
              <button className='text-xl text-semibold bg-blue-800 text-white hover:bg-gray-800 w-[300px] py-1.5 rounded-full shadow-md'>Login</button>
            </div>
            <div className='mt-1'>
              <h1 className='text-center'>or</h1>
            </div>
            <div className='mt-3 flex flex-1 gap-4 justify-center  '>
              <div className='border rounded hover:border-green-400  '>
                <FcGoogle className='text-3xl'/>
              </div>
              <div className='border rounded hover:border-green-400 '>
                <FaXTwitter className='text-3xl'/>
              </div>
              <div className='border rounded hover:border-green-400 '>
                <BiLogoFacebookSquare className='text-3xl'/>
              </div>
              <div className='border rounded hover:border-green-400 '>
                <FaLinkedin className='text-3xl'/>
              </div>
            </div>
            <div className='mt-6 flex gap-5'>
              <h1 className='text-xs ml-11'>Do you have account?
              <span className=' hover:text-indigo-800 text-semibold text-sm'>SignUp</span></h1>
              <h1 className='text-sm ml-10 hover:text-orange-700'>Need Help?</h1>
            </div>
            
        </div>
    </div> 
  )
}

export default LoginPage