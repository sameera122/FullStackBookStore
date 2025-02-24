import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
  const [authUser,setAuthUser]=useAuth();
  const handleLogout=()=>{
    try {
      // change the setauthuser state to null 
      // setAuthUser=({
      //     ...authUser,
      //     user:null,
      //   })
      setAuthUser((prevAuthUser) => ({
        ...prevAuthUser,
        user: null
    }));
    
      localStorage.removeItem("Users");
      toast.success("logout successfull");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
   
    } catch (error) {
      toast.error("Error: "+error.message);
     setTimeout(() => {}, 3000);
    }
  }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
