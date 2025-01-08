import React, { useState } from 'react'

const LoginPage = () => {
  const[islogin,setLogon]=useState(true)
  return (
    <div className='bg-stone-800 grid min-h-screen py-4' >
        <div className='bg-white text-black place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className=''>
              <h1 className='text-xl font-semibold text-black'>Register</h1>
            </div>
            <div >
              <input type='text' placeholder='Enter Name'
              className='bg-transparent border-0 outlined-none h-10 placeholder:text-slate-600'/>
            </div>
            <div className=''>
              <input type='text' placeholder='Enter Email'/>
            </div>
            <div className=''>
              <input type='text' placeholder='Enter Password'/>
            </div>
            <div className=''>
              <input type='text' placeholder='Confirm Password'/>
            </div>
            <div className=''>
              <button className=''>Submit</button>
            </div>
        </div>
    </div> 
  )
}

export default LoginPage