import PhoneChat from "../components/PhoneChat.jsx";
import DesktopChat from "../components/DesktopChat.jsx";

export default function ChatPage() {
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
