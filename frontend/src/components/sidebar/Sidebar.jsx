import useGetContacts from "../../hooks/useGetContacts.js";
import Spinner from "../Spinner.jsx";
import Person from "./Person.jsx";

export default function Sidebar() {
  const { loading, contacts } = useGetContacts();
  return (
    <div
      className="my-[1%] p-[5%] h-96 md:h-80 overflow-auto flex flex-col gap-2">
      {loading ? (
        <Spinner />
      ) : (
        contacts.map((user) => <Person user={user} key={user._id} />)
      )}
    </div>
  );
}
