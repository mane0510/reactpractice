import { Mode } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookMaterialUi = () => {

     const defaultValues={
            firstNames:"",
            middleName:"",
            lastName:"",
            age:0,
            city:""
         }
         const[handleSubmit,reset,register]=useForm([
            Mode="onChange",
            defaultValues=defaultValues,
         ])
         const  onSubmitForm=(data)=>{
        console.log("The data with Material ui is:",data)
         }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
       <div style={{
           Paddingleft:"20px",
           paddingRight:"20px",
           marginTop:"20px"
       
       }}>
           <div 
           style={
            {
                marginTop:"10px",
                marginBottom:"10px"
            }
           }>MaterilUi Usecases
           <TextField sx={{ marginRight:"10px"}} id="outlined-basic" label="First Name" variant="outlined" name="firstName"  {...register("firstName")} />
           <TextField sx={{ marginRight:"10px"}} id="outlined-basic" label="Middle Name" variant="outlined" name="middleName" {...register("middleName")}/>
           <TextField sx={{ marginRight:"10px"}} id="outlined-basic" label="Last Name" variant="outlined" name="lastName" {...register("LastName")}/>
           <TextField sx={{ marginRight:"10px"}} id="outlined-basic" label="Age" variant="outlined" name="age" {...register("Age")} typeof="number" />
           <TextField sx={{ marginRight:"10px"}} id="outlined-basic" label="City" variant="outlined" name="City" {...register("City")} />
           </div>
           <div>
           <Button type='submit' variant="outlined">Submit</Button>
           </div>
       </div>
       </form>
  )
}

export default ReactHookMaterialUi