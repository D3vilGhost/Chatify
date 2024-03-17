import Message from "./Message.jsx";
import { useAuthContext } from "../../context/AuthContext";
import useGetMessages from "../../hooks/useGetMessages.js";
import Spinner from "../Spinner.jsx";
import NoChatContainer from "./NoChatContainer.jsx";
import usePerson from "../../context/usePerson.js";
import useListenMessages from "../../hooks/useListenMessage.js";
import { useRef ,useEffect} from "react";
export default function ChatsContainer() {

  const { authUser } = useAuthContext();
  const { loading, messages } = useGetMessages();
  const { selectedPerson } = usePerson();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
        lastMessageRef.current?.scrollIntoView();
    }, 0);
  }, [messages]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : messages.length == 0 ? (
        <NoChatContainer />
      ) : (
        messages.map((msg) => (
            <div 
            key={msg._id}
            ref={lastMessageRef}>
          <Message
            user={msg.senderId == authUser._id ? authUser : selectedPerson}
            message={msg.message}
          />
          </div>
        ))
      )}
    </div>
  );
}
