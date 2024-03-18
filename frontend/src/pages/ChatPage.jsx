import PhoneChat from "../components/PhoneChat.jsx";
import DesktopChat from "../components/DesktopChat.jsx";
import { useEffect } from "react";
import usePerson from "../context/usePerson.js";

export default function ChatPage() {
  const { setSelectedPerson } = usePerson();
  
  useEffect(() => {
    return () => {
      setSelectedPerson(null);
    };
  }, []);

  return (
    <>
      <div className="md:hidden">
        <PhoneChat />
      </div>
      <div className="hidden md:block">
        <DesktopChat />
      </div>
    </>
  );
}
