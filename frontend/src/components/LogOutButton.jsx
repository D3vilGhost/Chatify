// import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout.js";
import { redirect } from "react-router-dom";

export default function LogOutButton() {
  const {logout}=useLogout();
  
  const handleLogout=async (e)=>{
    e.preventDefault();
    await logout();
    return redirect("/");
  }
  
  return (
    <div className="self-end w-fit border-2 rounded-md border-gray-700 hover:border-white hover:scale-110 p-1" onClick={handleLogout}>
      <BiLogOut className="text-white text-4xl"/>
    </div>
  );
}
