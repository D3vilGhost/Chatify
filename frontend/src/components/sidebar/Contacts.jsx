import React from "react";
import Person from "./Person.jsx";
import Spinner from "../Spinner.jsx";
import useGetContacts from "../../hooks/useGetContacts.js";
import {useEffect} from "react";
import usePerson from "../../context/usePerson.js";

export default function Contacts() {
  const { loading, contacts } = useGetContacts();
  const {selectedPerson, setSelectedPerson} = usePerson();
  useEffect(()=>{
    return ()=>{setSelectedPerson(null)};
  },[])
  return (
    <div className="flex flex-col gap-2" id="1">

      {loading ? <Spinner /> :contacts.map((user) => (
				<Person user={user} key={user.username}/>
			))}
      
    </div>
  );
}
