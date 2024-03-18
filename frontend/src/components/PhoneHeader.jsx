import { IoIosArrowRoundBack } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import LogOutButton from "./LogOutButton.jsx";
import usePerson from "../context/usePerson.js";

export default function PhoneHeader() {
  const { selectedPerson,setSelectedPerson } = usePerson();
  return (
    <div className="grid grid-cols-3 self-center ">
      {selectedPerson ? (
        <IoIosArrowRoundBack className="justify-self-start self-center text-3xl hover:scale-125 hover:text-white" 
        onClick={(e)=>{
            setSelectedPerson(null)
        }}/>
      ) : (
        <RiHome2Line className="justify-self-start self-center text-3xl"
        onClick={(e)=>{
          window.location.href="/"
        }}/>
      )}
      <div className="justify-self-center text-2xl font-extrabold self-center">
        CHATIFY
      </div>
      <div className="justify-self-end self-center">
        <LogOutButton />
      </div>
    </div>
  );
}
