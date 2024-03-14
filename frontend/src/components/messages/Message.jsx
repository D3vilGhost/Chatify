import React from 'react'
import usePerson from '../../context/usePerson'

export default function Message({user,message}) {
    const {selectedPerson}=usePerson();
  return (
    <div className={`flex ${user._id==selectedPerson._id?"flex-row":"flex-row-reverse"} m-3`}>
    <div className="h-10 p-2">
        <img src={user.profilePic} className="h-full rounded-full" />
    </div>
    <div className="flex w-2/3 rounded-md border-2 text-white border-white p-2 text-sm">
        {message}
    </div>
    </div>
  )
}
