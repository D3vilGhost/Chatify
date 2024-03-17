import { useEffect } from "react";
import usePerson from "../../context/usePerson.js";
import useGetContacts from "../../hooks/useGetContacts.js";
import Spinner from "../Spinner.jsx";
import Person from "./Person.jsx";

export default function Sidebar() {
  const { loading, contacts } = useGetContacts();
  const { setSelectedPerson } = usePerson();

  useEffect(() => {
    return () => {
      setSelectedPerson(null);
    };
  }, []);

  return (
    <div
      className="m-[1%] p-[5%] h-80 overflow-auto flex flex-col gap-2">
      {loading ? (
        <Spinner />
      ) : (
        contacts.map((user) => <Person user={user} key={user._id} />)
      )}
    </div>
  );
}
