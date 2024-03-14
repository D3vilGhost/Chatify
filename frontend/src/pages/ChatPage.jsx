import Header from "./Header.jsx";
import LogOutButton from "../components/LogOutButton.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import MessageContainer from "../components/messages/MessageContainer.jsx";
import usePerson from "../context/usePerson.js";
import Default from "../components/messages/Default.jsx";
export default function ChatPage() {
  const {selectedPerson}=usePerson();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-row text-white justify-center gap-5 p-5 ">
        <Sidebar />
        {selectedPerson==null?<Default/>:<MessageContainer />}
        
      </div>
      <div className="p-5">
        <LogOutButton />
      </div>
    </div>
  );
}
