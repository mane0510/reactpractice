import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const[count,setCount]=useState(0);
    const[secounds,setSecounds]=useState(0)
    useEffect(() => {
        console.log('count changed',count)
    }
, [count])
    useEffect(() => {
        const InytervalId=setInterval(()=>{
            setSecounds(prevSecounds=>prevSecounds+1)
        },1000)

      return () => clearInterval(InytervalId)
 }, [])
    

  return (
    <>
    <div>
        <h1>MultiEffectComponent</h1>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>IncrementCount</button>
        <h1 className='text-2xl text-black font-semibold hover:text-blue-300 '>TimerComponent</h1>
        <h1 className='text-2xl text-black font-semibold hover:text-blue-300 '>secounds:{secounds}</h1>
    </div>
    </>
   
  )
}

export default MultiEffectComponent