import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout.js";
import { redirect } from "react-router-dom";

export default function LogOutButton() {
  const { logout } = useLogout();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    return redirect("/");
  };

  return (
    <BiLogOut
      className="text-3xl hover:scale-125 hover:text-white"
      onClick={handleLogout}
    />
  );
}
