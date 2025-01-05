import React, { useEffect, useState } from 'react'
import { SiToptal } from 'react-icons/si';

const UseEffectBasic = () => {
    const[count,setCount]=useState(0);
    const[total,setTotal]=useState(1)
    //Version 1
    // useEffect(() => {
    //     alert("I will run only on rendering...!")  // it will be runing in all rendering
    //       })

    //Version 2
    //      useEffect(() => {
    //    alert("I will run only in 1 st render...!")      // this will run only 1st rendering 
    //      }, [])

    //Version 3
    // useEffect(() => {
    //     alert("I will everytime when count will update...! ")  // This will render After every count 
    //     }, [count])

    //Version 4
    // useEffect(() => {
    //     alert("I will everytime when count will update...! ")   // this will render for each total and count click before and after 
      
    // }, [count,total])
     //Version 5
   useEffect(() => {
     alert("Count is Updated")
   
     return () => {
      alert("Count is Unmounted from UI")    // this will be cleeanup Function 
   }}, [count])

    
const HandleClick=()=>{
         setCount(count+1)
        
      }  
      const HandleClickTotal=()=>{
        setTotal(total+1)
     }    


  return (
    <div>
        <h1>UseEffectBasic</h1>
        <button onClick={HandleClick} className='px-4 py-2 bg-blue-400 text-black-200 shadow-md font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Update Count</button>
        <p>The Count You have  Done is {count} Times of Clicking Button</p>
        <br/>
        <button onClick={HandleClickTotal} className='px-4 py-2 bg-blue-400 text-black-200 shadow-md font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Update Total</button>
        <p>The TotalCount You have  Done is {total} Times of Clicking Button</p>
        <br/>

    </div>
  )
}

export default UseEffectBasic