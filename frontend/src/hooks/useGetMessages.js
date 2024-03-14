import toast from "react-hot-toast";
import usePerson from "../context/usePerson";
import { useEffect, useState } from "react";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedPerson } = usePerson();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {

        const res = await fetch(`/api/messages/${selectedPerson._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);

      } 
      catch(error){
        toast.error(error.message);
      } 
      finally{
        setLoading(false);
      }
    };
    if (selectedPerson?._id) {
      getMessages();
    }
  }, [selectedPerson?._id]);
  return { messages, loading };
}
