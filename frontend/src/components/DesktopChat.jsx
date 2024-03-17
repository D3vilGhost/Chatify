import Sidebar from "../components/sidebar/Sidebar";
import MessageInput from "../components/messages/MessageInput";
import MessageContainer from "../components/messages/MessageContainer";
import DesktopHeader from "../components/DesktopHeader.jsx";
import DefaultContainer from "../components/messages/DefaultContainer.jsx"
import usePerson from "../context/usePerson.js";
export default function DesktopChat() {
  const { selectedPerson } = usePerson();
  return (
    <div
      className="border-2 rounded-xl border-black
        backdrop-blur-xl
        grid grid-cols-3
        p-[1%]
        text-md font-semibold
        h-96 overflow-hidden"
    >
      <div className="col-span-3 row-span-1 p-[1%]">
        <DesktopHeader />
      </div>
      <hr className="border-gray-700 border col-span-3" />
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-2 h-full">
        {selectedPerson == null ? <DefaultContainer /> : <MessageContainer />}
      </div>
    </div>
  );
}
