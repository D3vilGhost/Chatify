import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import Spinner from "../Spinner.jsx";
import toast from "react-hot-toast";
export default function MessageInput() {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message == "") {
      toast.error("Type Something To Send");
      return;
    }
    await sendMessage(message);
    setMessage("");
  };
  return (
    <div className="flex flex-row gap-2">
      <input
        className="w-full px-3 py-2 text-sm border-2 rounded-md border-black bg-transparent placeholder:italic placeholder:text-gray-900"
        type="text"
        placeholder="Type Your Message Here..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        
      ></input>
      <div className="content-center hover:scale-125 p-1">
        {loading ? (
          <Spinner />
        ) : (
          <IoSendSharp className="text-3xl" onClick={handleSubmit} />
        )}
      </div>
    </div>
  );
}
