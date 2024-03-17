import usePerson from "../../context/usePerson.js";

export default function Person({ user }) {
  const { selectedPerson, setSelectedPerson } = usePerson();
  const isSelected = selectedPerson?.username == user.username;

  return (
    <div
      className={`flex flex-row gap-2 border-2 border-black rounded-md hover:border-neutral-200 hover:scale-105 
                      ${isSelected ? "bg-sky-400" : ""}`}
      onClick={() => {
        setSelectedPerson(user);
      }}
    >
      <div className="h-10 p-1">
        <img
          src={user.profilePic}
          alt="avatar"
          className="h-full border border-black  rounded-full"
        />
      </div>
      <div className="self-center">{user.username}</div>
    </div>
  );
}
