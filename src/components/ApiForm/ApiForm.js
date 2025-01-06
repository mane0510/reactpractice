import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiForm = () => {
    const[users,setUsers]=useState([])
    useEffect(() => {
      axios.get("http://localhost:5001/getNewUsers")
      .then((response)=>{
        console.log("The Response is:",response?.data)
        setUsers(response.data.result)
      })
      .catch((error)=>{
        console.log("The Error is Happened...!")
      })
    }, [])
    
  return (
    <>
    <div className='flex justify-center font-semibold text-xl my-5'>
        <h1>apiForm</h1>
        </div>
        <div>
            {users.length>0 ?users.map((user,userIndex)=>{
                return(
                 <div className='flex gap-2 items-center'key={userIndex}>
                    <div>{user?.firstName}</div>
                    <div>{user?.middleName}</div>
                    <div>{user?.lastName}</div>
                    
                 </div>   
                )
            }):""}
        </div>
    </>
    
  )
}

export default ApiForm