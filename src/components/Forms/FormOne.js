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
        <div className='w-12/13 max-w-lg border place-self-center flex flex-col p-7 min-h-[450px] rounded-xl shadow-orange-700 bg-white ml-10'>
        <h1 className='text-bold text-center text-2xl text-orange-700 border-spacing-6 border-b-4 border-slate-900'>Form in React</h1>
        <form onSubmit={handleSubmit}>
            <div className='mt-5 text-lg text-semibold text-left '>
            <label htmlFor="firstname">FirstName<span className='text-red-600'>*</span>:</label>
            <input type='text' placeholder='Enter FirstName' name='firstname'onChange={(e)=>handleChange(e)} required value={values.firstName} 
            className='px-5 py-1'/>
            </div>
            <div  className='mt-5  text-lg text-semibold text-left '>
            <label htmlFor="lastname">LastName<span className='text-red-600'>*</span>:</label>
            <input type='text' placeholder='Enter LastName' name='lastname' onChange={(e)=>handleChange(e)} required value={values.lastName}
            className='px-5 py-1'/>
            </div>
            <div  className='mt-5 text-lg text-semibold text-left'>
            <label htmlFor="email">Email<span className='text-red-600'>*</span>:</label> 
            <input type='text' placeholder='Enter email' name='email' onChange={(e)=>handleChange(e)} required value={values.email}
            className='px-5 py-1'/>
            </div>
            <div  className='mt-5 text-lg text-semibold text-left '>
            <label htmlFor="contact">Contact<span className='text-red-600'>*</span>:</label>
            <input type='text' placeholder='Enter Contact' name='contact' onChange={(e)=>handleChange(e)} required value={values.conatct}
            className='px-5 py-1'/>
            </div>
            <div  className='mt-5 text-lg text-semibold text-left'>
            <label htmlFor='gender'>Gender :</label>
            <input type='radio' name='gender'/>Male
            <input type='radio' name='gender'/>Female
            <input type='radio' name='gender'/>other
            </div>
            <div  className='mt-5 text-lg text-semibold text-left ' >
            <label htmlFor='subject'>Subject:</label>
            <select name='subject' id='subject' onChange={(e)=>handleChange(e)}>
            <option value='math' onChange={(e)=>handleChange(e)}>Select</option>
                <option value='math' onChange={(e)=>handleChange(e)}>Mathematics</option>
                <option value='physics' onChange={(e)=>handleChange(e)}>Physics</option>
                <option value='chemistry' onChange={(e)=>handleChange(e)}>Chemistry</option>
                <option value='biology' onChange={(e)=>handleChange(e)}>Biology</option>
            </select>
            </div>
            <div  className='mt-5 text-lg text-semibold text-left'>
            <label htmlFor='resume'>Resume:</label>
            <input type='file' placeholder='Select Resume' name='resume' onChange={(e)=>handleChange(e)} 
            className='border border-orange-600 rounded'/>
            </div>
            <div  className='mt-5 text-lg text-semibold text-left '>
            <label htmlFor='url'>url:</label>
            <input type='text' name='url' placeholder='Enter Image url' onChange={(e)=>handleChange(e)}
            className='px-7 py-1'/>
            </div>
            <div  className='mt-5 text-lg text-semibold text-left align-text-top'>
            <label htmlFor='about'>About:</label>
            <div>
            <textarea name='about' id='about' cols='40' rows='5'  onChange={(e)=>handleChange(e)}
             placeholder='Enter description'
             className='px-8 border-slate-700'></textarea>
            </div>
            
            </div>
            <div  className='mt-5 text-lg text-semibold  gap-x-4 '>
            <button type='button' onClick={ResetFun} className=' hover:bg-orange-800 cursor-pointer border-black rounded-full bg-orange-500 px-5  text-white text-xl  '>Reset</button>
            <button type='submit' className=' hover:bg-orange-800 cursor-pointer border-black rounded-full  bg-orange-500 px-5  text-white text-xl  '>Submit</button>
            </div> 
        </form>
        </div>
    </div>
  )
}

export default FormOne