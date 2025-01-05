import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const[secounds,setSecounds]=useState(0)
    useEffect(() => {
    const IntervalId=setInterval(()=>{
        console.log("SetInterval executed ")
        setSecounds(prevSecounds=>prevSecounds+1);
    },1000)
    
      return () => {
        console.log("Time To Stop")
        clearInterval(IntervalId)
      
      }
    }, []) 
  return (
    <>
    <div>
        <h1 className='text-2xl text-black font-semibold hover:text-blue-300 '>TimerComponent</h1>
        <h1 className='text-2xl text-black font-semibold hover:text-blue-300 '>secounds:{secounds}</h1>
    </div>
    </>
    
  )
}

export default TimerComponent