import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import {useFriendListContext} from  "../context/FriendListContext.jsx";

export default function useGetFriends(){

    const [loading,setLoading]=useState(false);
    const {friendList,setFriendList}=useFriendListContext();

    const getFriends=async()=>{
        setLoading(true);
        try{
            const res=await fetch("/api/friend");
            const data= await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setFriendList(data);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{            
            setLoading(false);
        }

    };
    useEffect(()=>{
        getFriends();
    },[]);
    return {loading};
}