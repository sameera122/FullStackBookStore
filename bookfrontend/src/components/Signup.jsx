import React from 'react';
import Login from "./Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/";
   const {
      register, 
      handleSubmit, 
      formState: { errors }, 
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      //data contain all three fields
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
        console.log(res.data);
        if(res.data){
          toast.success('Signup successfull');
          navigate(from,{ replace:true });
          window.location.reload();

        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      // console.log(err);
      // alert("error:"+err);
      if(err.response){
        console.log(err);
       toast.error("error is: "+err.response.data.message);
      }

    })
  };
  return (
    <>
     <div className='flex h-screen items-center justify-center'>
      <div  className="w-[600px]">
        <div className="modal-box ">
          <form onSubmit={handleSubmit(onSubmit)}
          method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          {/* </form> */}
          <h3 className="font-bold text-lg">Signup</h3>
          <div className='text-left mt-4 space-y-2'>
            <span>Name</span>
            <br/>
            <input type="text" placeholder='Enter your Name' className=' w-80 px-3 border rounded outline-none'  {...register("fullname", { required: true })}/> <br/>
            {errors.fullname && <span className="text-red-500">This field is required</span>}
            </div>    
          <div className='text-left mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email" placeholder='Enter your Email' className=' w-80 px-3 border rounded outline-none'  {...register("email", { required: true })}/> <br/>
            {errors.email && <span className="text-red-500">This field is required</span>}
            </div>    
            <div className='text-left mt-2 space-y-2'>
            <span >Password</span>
            <br/>
            <input type="password" placeholder='Enter your Password' className='w-80 px-3 border rounded outline-none' {...register("password", { required: true })}/> <br/>
            {errors.password && <span className="text-red-500">This field is required</span>}
            </div>   
           <div className='space-y-3 text-left flex justify-around'>
            <button className='bg-pink-600 text-white mt-3 border rounded-md px-3 py-1 hover:bg-pink-800 duration-300'>Signup</button> 
            <h3>Not Registered? <button  className='text-blue-500 underline cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button><Login/></h3>
            
      
            </div>
              </form>
            </div>
           
      </div>
     </div>
    </>
  )
}
export default Signup;
// import React from 'react'
//  import { Link } from "react-router-dom";
// import Login from './Login';
// function Signup() {
//   return (
//     <>
//     <div className='flex h-screen items-center justify-center'>
//          {/* Button to open the modal */}
//          <button 
//         className="bg-blue-600 text-white px-4 py-2 rounded" 
//         onClick={() => document.getElementById("my_modal_3").showModal()}
//       >
//         Open Signup Modal
//       </button>
//     <dialog id="my_modal_3" className="modal">
//   <div className="modal-box ">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Signup</h3>
//     <div className='text-left mt-4 space-y-2'>
//       <span>Name</span>
//       <br/>
//       <input type="text" placeholder='Enter your Name' className=' w-80 px-3 border rounded outline-none'/>
//       </div>    
//     <div className='text-left mt-4 space-y-2'>
//       <span>Email</span>
//       <br/>
//       <input type="email" placeholder='Enter your Email' className=' w-80 px-3 border rounded outline-none'/>
//       </div>    
//       <div className='text-left mt-2 space-y-2'>
//       <span >Password</span>
//       <br/>
//       <input type="password" placeholder='Enter your Password' className='w-80 px-3 border rounded outline-none'/>
//       </div>   
//      <div className='space-y-3 text-left flex justify-around'>
//       <button className='bg-pink-600 text-white mt-3 border rounded-md px-3 py-1 hover:bg-pink-800 duration-300'>Signup</button> 
//       <h3>Already Registered? <button className='text-blue-500 underline cursor-pointer'
//       onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>{" "}<Login/></h3>
      

//       </div>
//       </div>
     
// </dialog>

//     </div>
//     </>
//   )
// }

// export default Signup
