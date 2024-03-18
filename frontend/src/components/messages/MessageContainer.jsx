import MessageInput from "./MessageInput.jsx";
import ChatsContainer from "./ChatsContainer.jsx";
import usePerson from "../../context/usePerson.js";
export default function MessageContainer() {
  
  const {selectedPerson}=usePerson();
  return (
    <div className="p-[1%] md:h-80 grid">
      <div className="text-2xl font-bold">
        To : {`${selectedPerson.fullName}`}
        <hr className="border-gray-700 border m-1" />
      </div>
      <div className="h-96 md:h-auto overflow-auto">
        <ChatsContainer />
      </div>
      <div className="place-self-end w-full">
        <MessageInput />
      </div>
    </div>
  );
}