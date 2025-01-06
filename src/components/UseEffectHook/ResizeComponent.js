import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const[windowWidth,setWindowWidth]=useState(window.innerWidth)
    useEffect(() => {
        const handleReSize =()=> setWindowWidth(window.innerWidth)
        console.log("Event Listner Added...!")
        window.addEventListener('resize',handleReSize)
      
    
      return () => {
        console.log("Event Listner Removed...!")
        window.removeEventListener('resize',handleReSize)
        
      }
    }, [])
     
  return (
    <>
    <div>
        <h1> ResizeComponent</h1>
        <h1> WindowWidth:{windowWidth}</h1>
    </div>
    </>
    
  )
}

export default ResizeComponent