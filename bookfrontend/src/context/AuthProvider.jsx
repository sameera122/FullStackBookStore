import React, { createContext, useContext, useState } from 'react';
export const AuthContext=createContext();
export default function AuthProvider({children}) {
  //getting  logged in user from local storage
  const initialAuthUser=localStorage.getItem("Users");
  // Managaging the state
  const[authUser,setAuthUser]=useState(
      initialAuthUser? JSON.parse(initialAuthUser): undefined
  )
  return(
   < AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
   </AuthContext.Provider>
  )
}
//creating our own hook
export const useAuth=()=>useContext(AuthContext);   
 