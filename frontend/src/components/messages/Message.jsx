import usePerson from '../../context/usePerson.js'

export default function Message({user,message}) {
    const {selectedPerson}=usePerson();
  return (
    <div className={`flex ${user._id==selectedPerson._id?"flex-row":"flex-row-reverse"} m-3`}>
    <div className="h-10 p-2">
        <img src={user.profilePic} className="h-full border border-black  rounded-full" />
    </div>
    <div className="flex w-1/2 rounded-md border-2 border-black p-2 text-sm overflow-auto">
        {message}
    </div>
    </div>
  )
}
