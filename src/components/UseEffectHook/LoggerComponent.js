import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const[count,setCOunt]=useState(0)
    useEffect(() => {
       console.log(`Component Renderd or count Changed ${count}`)
    
     
    }, [])
    
  return (
    <>
    <div>
        <h1 className='text-2xl text-black font-semibold hover:text-blue-300 '>LoggerComponent</h1>
        <h1 className='text-2xl text-black font-semibold hover:text-blue-300 '>Count:{count}</h1>
        <button  className=' px-4 py-2 bg-blue-400 text-black-200 shadow-md font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={()=>setCOunt(count+1)}>Increment</button>
    </div>
    </>
    
  )
}

export default LoggerComponent