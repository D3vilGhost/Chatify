import { useState } from "react";
import toast from "react-hot-toast";
import { useFriendListContext } from "../context/FriendListContext.jsx";

export default function useRemoveFriend() {
  const [loading, setLoading] = useState(false);
  const { friendList, setFriendList } = useFriendListContext();

  const removeFriend = async (friend) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/friend/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(friend),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setFriendList(data);
      toast.success("Friend Removed Successfully!")

    } 
    catch (error) {
      
      toast.error(error.message);
    } 
    finally {
      setLoading(false);
    }
  };
  return { loading, removeFriend };
}
