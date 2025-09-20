import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from "../context/DoctorContext";

export const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const {dToken, setDToken}=useContext(DoctorContext)

  const navigate=useNavigate()

  const logout=()=>{

    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')  
    dToken && setDToken('') 
    dToken && localStorage.removeItem('dToken')
    
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-slate-100 shadow-xl">
      <div className="flex items-center gap-2 text-xs">
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.admin_logo} />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-600">{aToken ? "Admin" : "Doctor"}</p>
      </div>

      <button onClick={ logout} className="bg-cyan-600 text-white text-sm px-10 py-2 rounded-full cursor-pointer hover:bg-slate-500">Logout</button>
    </div>
  );
};
