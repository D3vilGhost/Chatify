import usePerson from "../../context/usePerson.js";
import { TiUserAdd } from "react-icons/ti";
import useAddFriend from "../../hooks/useAddFriend.js";
import Spinner from "../Spinner.jsx";

export default function AddPerson({ user }) {
  const { selectedPerson, setSelectedPerson } = usePerson();
  const isSelected = selectedPerson?.username == user.username;
  const {loading,addFriend}=useAddFriend();

  const handleAddFriend=async (e)=>{
    setSelectedPerson(null);
    await addFriend();
  }
  return (
    <div
      className={`grid grid-cols-5  border-2 border-black rounded-md hover:border-neutral-200 hover:scale-105 
                      ${isSelected ? "bg-sky-400" : ""}`}
    >
      <div
        className="flex flex-row gap-1 col-span-4 overflow-auto"
        onClick={() => {
          setSelectedPerson(user);
        }}
      >
        <div className="h-10 min-w-10 p-1">
          <img
            src={user.profilePic}
            alt="avatar"
            className="h-full border border-black  rounded-full w-fit"
          />
        </div>
        <div className="self-center">{user.username}</div>
      </div>
      <div className="self-center col-span-1">
        {
        loading?(<Spinner/>):
        <TiUserAdd className="mr-1 text-2xl hover:text-white hover:scale-125" 
              onClick={(e)=>{
                handleAddFriend();
              }}
        />
      }
      </div>
    </div>
  );
}
