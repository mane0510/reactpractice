import React, { useState } from 'react'

const FormOne = () => {
     const [values,setValue]=useState({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        conatct:'',
        subject:'',
        resume:'',
        url:'',
        about:''

     })
     const handleChange=(e)=>{
       setValue({...values,[e.target.name]:[e.target.value]})
     }

     const handleSubmit=(e)=>{
        e.preventDefalut()
        console.log(values)
     }

     const ResetFun=()=>{
        setValue({firstName:'',lastName:'',email:'',})
     }


  return (
    <div className=' bg-stone-800 grid min-h-screen brightness-[100%] flex text-center'>
        <div className='  w-12/13 max-w-lg border place-self-center flex flex-col p-7 min-h-[450px] rounded-xl shadow-orange-700 bg-white ml-10'>
        <h1 className='text-bold text-center text-xl text-orange-700 border-spacing-6 border-b-4'>Form in React</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="firstname">FirstName<span className='text-red-600'>*</span>:</label>
            <input type='text' placeholder='Enter FirstName' name='firstname'onChange={(e)=>handleChange(e)} required value={values.firstName}/>
            </div>
            <div>
            <label htmlFor="lastname">LastName<span className='text-red-600'>*</span>:</label>
            <input type='text' placeholder='Enter LastName' name='lastname' onChange={(e)=>handleChange(e)} required value={values.lastName}/>
            </div>
            <div>
            <label htmlFor="email">Email<span className='text-red-600'>*</span>:</label> 
            <input type='text' placeholder='Enter email' name='email' onChange={(e)=>handleChange(e)} required value={values.email}/>
            </div>
            <div>
            <label htmlFor="contact">Contact<span className='text-red-600'>*</span>:</label>
            <input type='text' placeholder='Enter Contact' name='contact' onChange={(e)=>handleChange(e)} required value={values.conatct}/>
            </div>
            <div>
            <label htmlFor='gender'>Gender</label>
            <input type='radio' name='gender'/>Male
            <input type='radio' name='gender'/>female
            <input type='radio' name='gender'/>other
            </div>
            <div>
            <label htmlFor='subject'>Subject:</label>
            <select name='subject' id='subject' onChange={(e)=>handleChange(e)}>
                <option value='math' onChange={(e)=>handleChange(e)}>Math</option>
                <option value='physics' onChange={(e)=>handleChange(e)}>Physics</option>
                <option value='chemistry' onChange={(e)=>handleChange(e)}>Chemistry</option>
                <option value='biology' onChange={(e)=>handleChange(e)}>Biology</option>
            </select>
            </div>
            <div>
            <label htmlFor='resume'>Resume:</label>
            <input type='file' placeholder='Select Resume' name='resume' onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
            <label htmlFor='url'>url:</label>
            <input type='text' name='url' placeholder='Enter Image url' onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
            <label htmlFor='about'>About:</label>
            <textarea name='about' id='about' cols='40' rows='5'  onChange={(e)=>handleChange(e)}
             placeholder='Enter description'></textarea>
            </div>
            <div>
            <button type='button' onClick={ResetFun}>Reset</button>
            <button type='submit'>Submit</button>
            </div>

            

            

           

           

            

            
            

            

           
        </form>
        </div>
             
    </div>
  )
}

export default FormOne