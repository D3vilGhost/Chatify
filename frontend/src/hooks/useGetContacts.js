import { useEffect, useState } from "react"
import toast from "react-hot-toast"


export default function useGetContacts(){

    const [loading,setLoading]=useState(false);
    const [contacts,setContacts]=useState([]);

    const getContacts=async()=>{
        setLoading(true);
        try{
            const res=await fetch("/api/users");
            const data= await res.json();
            
            if(data.error){
                throw new Error(data.error);
            }
            
            setContacts(data);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{            
            setLoading(false);
        }

    };
    useEffect(()=>{
        getContacts();
    },[]);
    return {loading,contacts,getContacts};
}