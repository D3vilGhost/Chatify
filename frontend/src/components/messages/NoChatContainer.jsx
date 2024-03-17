import usePerson from "../../context/usePerson";
export default function NoChatContainer() {
  const { selectedPerson } = usePerson();
  return (
    <div
      className="h-full font-bold text-sm text-center
                 flex justify-center items-center"
    >
      You Have No Conversation with "{selectedPerson.fullName}" 😰
      <br />
      <br />
      Don't Know How to Start A Conversation?
      <br />
      <br />
      Send a "Hi!" 😜
    </div>
  );
}
