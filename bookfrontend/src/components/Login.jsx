import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const { register, 
    handleSubmit, 
    formState: { errors }, 
} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div >
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box ">
    
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
  <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
  onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    <div className='text-left mt-4 space-y-2'>
      <span>Email</span>
      <br/>
      <input type="email" 
        placeholder='Enter your Email'
       className=' w-80 px-3 border rounded outline-none'
       {...register("email", { required: true })}/>
       <br/>
      {errors.email && <span className="text-red-500">This field is required</span>}
      </div>    
      <div className='text-left mt-2 space-y-2'>
      <span >Password</span>
      <br/>
      <input type="password" placeholder='Enter your Password' className='w-80 px-3 border rounded outline-none'
       {...register("password", { required: true })}/>  <br/>
      {errors.password && <span className="text-red-500">This field is required</span>}
      </div>   
     <div className='space-y-3 text-left flex justify-around'>
      <button  className='bg-pink-600 text-white mt-3 border rounded-md px-3 py-1 hover:bg-pink-800 duration-300'>Login</button> 
      <h3>Not Registered? <Link to="/signup" className='text-blue-500 underline cursor-pointer'>Signup</Link></h3>
      

      </div>
      </form>
      </div>
     
</dialog>
    </div>
  )
}

export default Login
 