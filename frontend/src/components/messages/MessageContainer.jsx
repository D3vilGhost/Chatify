import React from "react";
import MessageInput from "./MessageInput";
import Message from "./Message";
import usePerson from "../../context/usePerson";
import { useAuthContext } from "../../context/AuthContext";
import useGetMessages from "../../hooks/useGetMessages";
import Spinner from "../Spinner.jsx";
import useListenMessages from "../../hooks/useListenMessage.js";

export default function MessageContainer() {
  const {authUser}=useAuthContext();
  const {selectedPerson}=usePerson();
  const {loading,messages}=useGetMessages();
  useListenMessages();

  return (
    <div className="flex-row w-2/3 border-4 h-96 border-white rounded-xl p-4 overflow-auto">
      <div className="text-xl font-bold bg-slate-950"> To: {`${selectedPerson.username}`}</div>
      <div>
        {(loading?<Spinner/>:(messages.map((msg) => (
				<Message user={(msg.senderId==authUser._id?authUser:selectedPerson)} message={msg.message} key={msg._id}/>
			))))}
      {
        console.log(messages)
      }
      </div>      
      <MessageInput />
    </div>
  );
}
