import useGetFriends from "../../hooks/useGetFriends.js";
import Spinner from "../Spinner.jsx";
import RemovePerson from "./RemovePerson.jsx";
import { useSearchContext } from "../../context/SearchContext.jsx";
import NoFriends from "./NoFriends.jsx";
import { useFriendListContext } from "../../context/FriendListContext.jsx";
import AddPerson from "./AddPerson.jsx";

export default function Sidebar() {
  const { loading } = useGetFriends();
  const { searchResult, setSearchResult } = useSearchContext();
  const {friendList}=useFriendListContext();
  return (
    <div
      className="my-[1%] p-[5%] h-96 md:h-80 overflow-auto flex flex-col gap-2"
      id="sidebar">
      {
        loading?
        (<Spinner/>):
        (
          (searchResult.length==1)?
          (<AddPerson user={searchResult[0]} key={searchResult[0]._id}/>):
          (
            (friendList.length==0)?
            (<NoFriends/>):
            (
              friendList.map((user)=><RemovePerson user={user} key={user._id}/>)
            )
          )
        )
        
      }
    </div>
  );
}
