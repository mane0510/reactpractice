import React from 'react'
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from"react-hook-form"

function ReactHookWithYup() {
    const schmea=yup.object().shape({
        FullName:yup.string().required("Enter The FullName"),
        Age:yup.number().max(99).min(18).required("Enter Proper Age"),
        email:yup .string().email().required("Please Enter proper Details"),
        password:yup.string().required("Not Strong Password "),
        confirmpassword:yup.string().oneOf([yup.ref("password"),null]).required("Wrong Password")
    })
    const {
        register,
        handleSubmit,
        formState:{errors}
        }= useForm({resolver:yupResolver(schmea)})
        function Submitdata(data){
            console.log("The data is:",data)
        }
        
      return (
        <form onSubmit={handleSubmit(Submitdata)}>
            <div>
                <label>FullName:</label>
                <input type='text' placeholder='Enter Full Name'{...register ("FullName")} />
                <p>{errors.FullName?.message}</p>
            </div>
            <br/>
            <div>
                <label>Age:</label>
                <input type='number' placeholder='Enter Age' {...register ("Age")} />
                <p>{errors.Age?.message}</p>
            </div>
            <br/>
            <div>
                <label>email:</label>
                <input type='text' placeholder='Enter emailId'{...register ("email")} />
                <p>{errors.email?.message}</p>
            </div>
            <br/>
            <div>
                <label>Password:</label>
                <input type='password' placeholder='Enter password...' {...register ("password")} />
                <p>{errors.password?.message}</p>
            </div>
            <br/>
            <div>
                <label>Confirm Password:</label> 
                <input type='password' placeholder='Confirm Password' {...register ("confirmpassword")} />
                <p>{errors.confirmpassword?.message}</p>
            </div>
            <br/>
                <input type='submit' />
        </form>
      )
}

export default ReactHookWithYup




    
    
 