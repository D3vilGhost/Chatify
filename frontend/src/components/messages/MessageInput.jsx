import React, { useState } from 'react'
import { IoSendSharp  } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';
import Spinner from "../Spinner.jsx"
import toast from 'react-hot-toast';
export default function MessageInput() {

  const {loading,sendMessage}=useSendMessage();
  const [message,setMessage]=useState("");

  const handleSubmit=async (e)=>{
    e.preventDefault()
    if(message==""){
      toast.error("Type Something To Send");
      return;
    }
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div className="flex flex-row gap-2 ">
      <input
        className="placeholder:italic flex w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
        type="text"
        placeholder="Type Your Message Here..."
        value={message}
        onChange={(e)=>{
          setMessage(e.target.value);
        }}
      ></input>
      <div className="flex content-center border-2 rounded-md border-gray-700 hover:border-white hover:scale-110 p-1">
       {loading?<Spinner/>:<IoSendSharp  className="text-4xl" onClick={handleSubmit}/>}
      </div>
    </div>
  )
}
