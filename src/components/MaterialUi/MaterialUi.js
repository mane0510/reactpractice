
import { Mode } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const MaterialUiForm= () => {

     const defaultValues={
        firstNames:"",
        middleName:"",
        lastName:"",
        age:0,
        city:""
     }
     const[handleSubmit,reset]=useForm([
        Mode="onChange",
        defaultValues=defaultValues,
     ])

  return (
    <div style={{
        Paddingleft:"20px",
        paddingRight:"20px",
        marginTop:"20px"
    
    }}>
        <div>MaterilUi Usecases
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>

    </div>
  )
}

export default MaterialUiFrom
