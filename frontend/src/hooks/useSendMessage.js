import { useState } from "react";
import toast from "react-hot-toast";
import usePerson from "../context/usePerson";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const {selectedPerson,messages,setMessages}=usePerson();

  const sendMessage=async (message)=>{
    setLoading(true);
    try{
        const res=await fetch(`/api/messages/send/${selectedPerson._id}`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        setMessages([...messages,data]);
    }
    catch(error){
        toast.error(error.message);
    }
    finally{
        setLoading(false);
    }
  }
  return {sendMessage,loading};
}
