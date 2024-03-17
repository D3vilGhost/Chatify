import MessageInput from "./MessageInput.jsx";
import ChatsContainer from "./ChatsContainer.jsx";
import usePerson from "../../context/usePerson.js";
export default function MessageContainer() {
  
  const {selectedPerson}=usePerson();
  return (
    <div className="p-[1%] h-80 grid">
      <div className="text-2xl font-bold">
        To : {`${selectedPerson.fullName}`}
        <hr className="border-gray-700 border m-1" />
      </div>
      <div className="overflow-auto">
        <ChatsContainer />
      </div>
      <div className="place-self-end w-full">
        <MessageInput />
      </div>
    </div>
  );
}
