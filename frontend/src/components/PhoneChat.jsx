import React from 'react'
import PhoneHeader from './PhoneHeader';
import Sidebar from './sidebar/Sidebar';
import SearchBar from './SearchBar';
import usePerson from '../context/usePerson';
import MessageContainer from "../components/messages/MessageContainer"
export default function PhoneChat() {
  const { selectedPerson} = usePerson();

  return (
    <div
      className="border-2 rounded-xl border-black
        backdrop-blur-xl
        p-[1%] h-fit
        text-md font-semibold"
    >
      <PhoneHeader />
      <hr className="border-gray-700 border m-[1%]" />
      <div className='grid grid-row-2'>
      {selectedPerson==null?<SearchBar />:""}
      {selectedPerson==null?<Sidebar />:<MessageContainer/>}
      </div>
      
    </div>
  )
}
