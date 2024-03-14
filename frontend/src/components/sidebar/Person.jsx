import usePerson from "../../context/usePerson.js";

export default function Person({ user }) {
  const {selectedPerson, setSelectedPerson} = usePerson();
  const isSelected=(selectedPerson?.username==user.username);

  return (
    <div className={`flex flex-row gap-2 border-2 border-gray-700 rounded-md hover:border-white hover:scale-105 
                      ${isSelected?"bg-neutral-500":""}`}
        onClick={()=>{
          setSelectedPerson(user)}}
    >
      <div className="h-12 p-1">
        <img
          src={user.profilePic}
          alt="avatar"
          className="h-full hover:border-0 border-green-500 border-4 rounded-full"
        />
      </div>
      <div className="self-center">{user.username}</div>
    </div>
  );
}
