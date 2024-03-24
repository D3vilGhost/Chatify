import { useState } from "react";
import toast from "react-hot-toast";
import { useSearchContext } from "../context/SearchContext.jsx";
import { useFriendListContext } from "../context/FriendListContext.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";

export default function useAddFriend() {
  const [loading, setLoading] = useState(false);
  const { searchResult, setSearchResult } = useSearchContext();
  const { friendList, setFriendList } = useFriendListContext();
  const {authUser}=useAuthContext();

  const addFriend = async () => {
    setLoading(true);
    try {
      if(searchResult[0]._id==authUser._id){
        setSearchResult([]);
        throw new Error("Can't Add Yourself as Friend!");
      }
      friendList.forEach((element) => {
        if (element._id == searchResult[0]._id) {
          setSearchResult([]);
          throw new Error("User Already Friend!");
        }
      });
      const res = await fetch(`/api/friend/add`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchResult[0]),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setSearchResult([]);
      setFriendList(data);
      toast.success("Friend Added Successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addFriend };
}
